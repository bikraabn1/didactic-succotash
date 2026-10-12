import Registration from '#models/registration'
import RegistrationPolicy from '#policies/registration_policy'
import { RegistrationService } from '#services/registration_service'
import { registrationValidators } from '#validators/registration'
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

    async show({ response, params }: HttpContext) {
        const targetRegistration = await Registration.findOrFail(params.id)

        response.json({
            message: 'User fetched successfully',
            data: targetRegistration
        })
    }

    async register({ request, response }: HttpContext) {
        const payload = await request.validateUsing(registrationValidators)
        this.registrationsService.register(payload)

        response.json({ message: 'User registered successfully', data: payload })
    }
}