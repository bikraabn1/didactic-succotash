import User from '#models/user'
import Registration from '#models/registration'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class RegistrationPolicy extends BasePolicy {
    before(user: User | null) {
        if (user && user.role == 'admin') {
            return true
        }
    }

    showMine(user: User | null, registration: Registration | null): AuthorizerResponse {
        return !!user && !!registration && user.id === registration.user_id
    }
    
    register() {
        return true
        
    }

    show() {
        return false
    }
}