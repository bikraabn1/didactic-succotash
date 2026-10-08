import Registration from '#models/registration'
import factory from '@adonisjs/lucid/factories'
import { UserFactory } from './user_factory.ts'

export const RegistrationFactory = factory
  .define(Registration, async ({ faker }) => {

    return {
      registration_number: faker.number.int({ min: 100000000, max: 999999999 }),
      fullName: faker.person.fullName(),
      nisn: faker.number.int({ min: 100000000, max: 999999999 }),
      schoolOrigin: faker.location.city() + 'High School',
      phone: 6200000+ faker.number.int({ min: 10000, max: 99999 }),
      address: faker.location.buildingNumber() + ' ' + faker.location.city(),
      average_score: faker.number.int({ min: 6, max: 10 }),
      status: faker.helpers.arrayElement(['pending', 'approved', 'rejected'])
    }
  })
  .relation('user', () => UserFactory)
  .build()