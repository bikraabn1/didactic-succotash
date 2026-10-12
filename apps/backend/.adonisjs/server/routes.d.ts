import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'registrations.registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.registrations.show_mine': { paramsTuple?: []; params?: {} }
    'registrations.registrations.register': { paramsTuple?: []; params?: {} }
    'registrations.registrations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'registrations.registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.registrations.show_mine': { paramsTuple?: []; params?: {} }
    'registrations.registrations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'registrations.registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.registrations.show_mine': { paramsTuple?: []; params?: {} }
    'registrations.registrations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'registrations.registrations.register': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}