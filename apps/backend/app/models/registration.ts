import { RegistrationSchema } from '#database/schema'
import { belongsTo, column } from '@adonisjs/lucid/orm'
import { ApiProperty } from '@foadonis/openapi/decorators'
import { DateTime } from 'luxon'
import User from './user.ts'
// import { compose } from "@adonis"
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Registration extends RegistrationSchema {
    @column({ isPrimary: true })
    @ApiProperty()
    declare id: number


    @column({ columnName: 'user_id' })
    @ApiProperty()
    declare userId: number

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @column({ columnName: 'registration_number' })
    @ApiProperty()
    declare registrationNumber: number

    @column({ columnName: 'full_name' })
    @ApiProperty()
    declare fullName: string

    @column()
    @ApiProperty()
    declare nisn: number

    @column({ columnName: 'school_origin' })
    @ApiProperty()
    declare schoolOrigin: string

    @column()
    @ApiProperty()
    declare phone: number

    @column()
    @ApiProperty()
    declare address: string

    @column({ columnName: 'average_score' })
    @ApiProperty()
    declare averageScore: number

    @column()
    @ApiProperty()
    declare status: string

    @column.dateTime({ autoCreate: true, columnName: 'created_at' })
    @ApiProperty()
    declare createdAt: DateTime<boolean>

    @column.dateTime({ autoCreate: true, columnName: 'updated_at' })
    @ApiProperty()
    declare updatedAt: DateTime<boolean>
}