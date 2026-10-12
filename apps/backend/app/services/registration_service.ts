import Registration from "#models/registration";
import { registrationValidators, updateRegistrationValidators } from "#validators/registration";
import { Infer } from "@vinejs/vine/types";
import { DateTime } from "luxon";

export class RegistrationService {
  async register(userId: number, payload: Infer<typeof registrationValidators>) {
    const registration = await Registration.create({
      ...payload,
      userId,
      status: payload.status ?? 'pending',
      createdAt: DateTime.now()
    })
    return registration
  }

  async update(registration: Registration, payload: Infer<typeof updateRegistrationValidators>) {
    registration.merge(payload)
    await registration.save()

    return registration
  }

  async destroy(registration: Registration) {
    await registration.delete()
    
    return registration
  }
}