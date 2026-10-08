import { RegistrationSchema } from '#database/schema'
import { belongsTo, column } from '@adonisjs/lucid/orm'
import { ApiProperty } from '@foadonis/openapi/decorators'
import { DateTime } from 'luxon'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Registration extends RegistrationSchema {
    @column({ isPrimary: true })
    @ApiProperty()
    declare id: number


    @column()
    @ApiProperty()
    declare user_id: number

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @column()
    @ApiProperty()
    declare registrationNumber: number

    @column()
    @ApiProperty()
    declare fullName: string

    @column()
    @ApiProperty()
    declare nisn: number

    @column()
    @ApiProperty()
    declare schoolOrigin: string

    @column()
    @ApiProperty()
    declare phone: number

    @column()
    @ApiProperty()
    declare address: string

    @column()
    @ApiProperty()
    declare averageScore: number

    @column()
    @ApiProperty()
    declare status: string

    @column()
    @ApiProperty()
    declare createdAt: DateTime<boolean> | null
}