import { BaseSchema } from '@adonisjs/lucid/schema'
import { RegistrationStatus } from '../../types/registration.ts'

export default class extends BaseSchema {
  protected tableName = 'registrations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable
      table.integer('user_id').references('id').inTable('users').unsigned().notNullable
      table.integer('registration_number').notNullable
      table.string('full_name').notNullable
      table.integer('nisn').notNullable
      table.string('school_origin')
      table.integer('phone')
      table.string('address')
      table.float('average_score')
      table.enum('status', Object.values(RegistrationStatus))

      table.timestamp('created_at').notNullable
      table.timestamp('updated_at').nullable
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
