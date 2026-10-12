import Registration from '#models/registration'
import RegistrationPolicy from '#policies/registration_policy'
import { RegistrationService } from '#services/registration_service'
import { registrationValidators, updateRegistrationValidators } from '#validators/registration'
import { inject } from '@adonisjs/core/container'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class RegistrationsController {
    constructor(private registrationsService: RegistrationService) { }

    async index({ request, response }: HttpContext) {
        const { page, limit } = request.all()
        const query = Registration.query()

        const paginated = await query.paginate(page, limit)

        response.json({
            message: 'Users fetched successfully',
            data: paginated
        })
    }

    async showMine({ bouncer, auth, response }: HttpContext) {
        const user = auth.getUserOrFail()

        const authorRegistration = await Registration.query()
            .where('user_id', user.id)
            .firstOrFail()

        await bouncer
            .with(RegistrationPolicy)
            .authorize('showMine', authorRegistration)

        response.json({
            message: 'User fetched successfully',
            data: authorRegistration
        })
    }

    async show({ response, params, bouncer }: HttpContext) {
        const targetRegistration = await Registration.findOrFail(params.id)
        await bouncer.with(RegistrationPolicy).authorize('show')
        response.json({
            message: 'User fetched successfully',
            data: targetRegistration
        })
    }

    async register({ auth, request, response, bouncer }: HttpContext) {
        await bouncer.with(RegistrationPolicy).authorize('register')
        const payload = await request.validateUsing(registrationValidators)
        const user = auth.getUserOrFail()
        const registration = await this.registrationsService.register(user.id, payload)

        response.created({
            message: 'User registered successfully',
            data: registration
        })
    }

    async update({ request, response, params, bouncer }: HttpContext) {
        const { id } = params
        const registration = await Registration.findOrFail(id)
        await bouncer.with(RegistrationPolicy).authorize('update')

        const payload = await request.validateUsing(updateRegistrationValidators)
        const result = await this.registrationsService.update(registration, payload)

        response.ok({
            message: 'User updated successfully',
            data: result
        })
    }

    async destroy({ params, response, bouncer }: HttpContext) {
        const { id } = params
        const registration = await Registration.findOrFail(id)
        await bouncer.with(RegistrationPolicy).authorize('destroy')

        const result = await this.registrationsService.destroy(registration)

        response.ok({
            message: 'User deleted successfully',
            data: result
        })
    }
}