import { UserFactory } from '#database/factories/user_factory'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        fullName: 'Admin Tester',
        email: 'admin@example.com',
        password: 'password',
        role: 'admin',
      },
      {
        fullName: 'User Tester',
        email: 'user@example.com',
        password: 'password',
        role: 'student',
      },
    ])
    await UserFactory.createMany(3)
  }
}