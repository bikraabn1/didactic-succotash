import vine from '@vinejs/vine'
import { RegistrationStatus } from '../../types/registration.ts'

export const registrationValidators = vine.create({
    registrationNumber: vine.number(),
    fullName: vine.string(),
    nisn: vine.number().unique({ table: 'registrations', column: 'nisn' }),
    schoolOrigin: vine.string(),
    phone: vine.number(),
    address: vine.string(),
    averageScore: vine.number(),
    status: vine.enum(RegistrationStatus).optional(),
})

export const updateRegistrationValidators = vine.create({
    registrationNumber: vine.number().optional(),
    fullName: vine.string().optional(),
    nisn: vine.number().unique({ table: 'registrations', column: 'nisn' }).optional(),
    schoolOrigin: vine.string().optional(),
    phone: vine.number().optional(),
    address: vine.string().optional(),
    averageScore: vine.number().optional(),
    status: vine.enum(RegistrationStatus).optional(),
})