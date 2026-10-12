import vine from '@vinejs/vine'
import { RegistrationStatus } from '../../types/registration.ts'

export const registrationValidators = vine.create({
    user_id: vine.number(),
    registration_number: vine.string(),
    full_name: vine.string(),
    nisn: vine.number().unique({ table: 'registrations', column: 'nisn' }),
    school_origin: vine.string(),
    phone: vine.number(),
    address: vine.string(),
    average_score: vine.number(),
    status: vine.enum(RegistrationStatus).optional(),
})