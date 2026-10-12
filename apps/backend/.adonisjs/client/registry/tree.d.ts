/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  registrations: {
    registrations: {
      index: typeof routes['registrations.registrations.index']
      showMine: typeof routes['registrations.registrations.show_mine']
      register: typeof routes['registrations.registrations.register']
      show: typeof routes['registrations.registrations.show']
    }
  }
}
