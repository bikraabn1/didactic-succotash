import Registration from "#models/registration";
import { registrationValidators } from "#validators/registration";
import { Infer } from "@vinejs/vine/types";
import { DateTime } from "luxon";

export class RegistrationService {
  async register(payload: Infer<typeof registrationValidators>) {
    const registration = await Registration.create({ ...payload, status: payload.status ?? 'pending', createdAt: DateTime.now() })

    return registration
  }
}