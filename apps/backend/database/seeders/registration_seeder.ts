import { RegistrationFactory } from '#database/factories/registration_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await RegistrationFactory.with('user').createMany(10)
  }
}