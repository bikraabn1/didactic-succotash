/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import { controllers } from '#generated/controllers'
import swaggerConfig from '#config/swagger'

router.get('/', () => {
  return { hello: 'world' }
})

router.get('/swagger.json', () => {
  return AutoSwagger.default.docs(router.toJSON(), swaggerConfig)
})

router.get('/docs', () => {
  return AutoSwagger.default.ui('/swagger.json', swaggerConfig)
})

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('/', [controllers.Registrations, 'index'])
        router.get('/show-mine', [controllers.Registrations, 'showMine'])
        router.post('/register', [controllers.Registrations, 'register'])
        router.patch('/update/:id', [controllers.Registrations, 'update'])
        router.delete('/delete/:id', [controllers.Registrations, 'destroy'])
        router.get('/:id', [controllers.Registrations, 'show'])
      })
      .prefix('registrations')
      .as('registrations')
      .use(middleware.auth())
  })
  .prefix('/api')
