/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/auth/signup',
    tokens: [{"old":"/api/auth/signup","type":0,"val":"api","end":""},{"old":"/api/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/auth/login',
    tokens: [{"old":"/api/auth/login","type":0,"val":"api","end":""},{"old":"/api/auth/login","type":0,"val":"auth","end":""},{"old":"/api/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/account/profile',
    tokens: [{"old":"/api/account/profile","type":0,"val":"api","end":""},{"old":"/api/account/profile","type":0,"val":"account","end":""},{"old":"/api/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/account/logout',
    tokens: [{"old":"/api/account/logout","type":0,"val":"api","end":""},{"old":"/api/account/logout","type":0,"val":"account","end":""},{"old":"/api/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'registrations.registrations.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/registrations',
    tokens: [{"old":"/api/registrations","type":0,"val":"api","end":""},{"old":"/api/registrations","type":0,"val":"registrations","end":""}],
    types: placeholder as Registry['registrations.registrations.index']['types'],
  },
  'registrations.registrations.show_mine': {
    methods: ["GET","HEAD"],
    pattern: '/api/registrations/show-mine',
    tokens: [{"old":"/api/registrations/show-mine","type":0,"val":"api","end":""},{"old":"/api/registrations/show-mine","type":0,"val":"registrations","end":""},{"old":"/api/registrations/show-mine","type":0,"val":"show-mine","end":""}],
    types: placeholder as Registry['registrations.registrations.show_mine']['types'],
  },
  'registrations.registrations.register': {
    methods: ["POST"],
    pattern: '/api/registrations/register',
    tokens: [{"old":"/api/registrations/register","type":0,"val":"api","end":""},{"old":"/api/registrations/register","type":0,"val":"registrations","end":""},{"old":"/api/registrations/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['registrations.registrations.register']['types'],
  },
  'registrations.registrations.update': {
    methods: ["PATCH"],
    pattern: '/api/registrations/update/:id',
    tokens: [{"old":"/api/registrations/update/:id","type":0,"val":"api","end":""},{"old":"/api/registrations/update/:id","type":0,"val":"registrations","end":""},{"old":"/api/registrations/update/:id","type":0,"val":"update","end":""},{"old":"/api/registrations/update/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['registrations.registrations.update']['types'],
  },
  'registrations.registrations.destroy': {
    methods: ["DELETE"],
    pattern: '/api/registrations/delete/:id',
    tokens: [{"old":"/api/registrations/delete/:id","type":0,"val":"api","end":""},{"old":"/api/registrations/delete/:id","type":0,"val":"registrations","end":""},{"old":"/api/registrations/delete/:id","type":0,"val":"delete","end":""},{"old":"/api/registrations/delete/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['registrations.registrations.destroy']['types'],
  },
  'registrations.registrations.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/registrations/:id',
    tokens: [{"old":"/api/registrations/:id","type":0,"val":"api","end":""},{"old":"/api/registrations/:id","type":0,"val":"registrations","end":""},{"old":"/api/registrations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['registrations.registrations.show']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
