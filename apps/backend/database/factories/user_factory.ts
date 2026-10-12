import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { UserRoles } from '../../types/registration.ts'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      password: 'password',
      role: faker.helpers.arrayElement(Object.values(UserRoles)),
    }
  })
  .build()