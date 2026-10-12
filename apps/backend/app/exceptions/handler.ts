import app from '@adonisjs/core/services/app'
import { errors as vineErrors } from '@vinejs/vine'
import { errors as authErrors } from '@adonisjs/auth'
import { type HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import { ErrorCode } from './error_codes.ts'
import ForbiddenException from './forbidden_exceptions.ts'
import { Exception } from '@adonisjs/core/exceptions'
import BadRequestException from './bad_exceptions.ts'

export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: unknown, ctx: HttpContext) {
    /**
     * Handle validation errors from VineJS
     */
    if (error instanceof vineErrors.E_VALIDATION_ERROR) {
      return ctx.response.status(400).send({
        error: ErrorCode.VALIDATION_ERROR,
        message: 'The given data was invalid',
        errors: error.messages.map((message: any) => ({
          field: message.field,
          message: message.message,
          rule: message.rule,
        })),
      })
    }

    /**
     * Handle authentication errors
     */
    if (error instanceof authErrors.E_UNAUTHORIZED_ACCESS) {
      return ctx.response.status(401).send({
        error: ErrorCode.UNAUTHORIZED_ACCESS,
        message: 'Not authenticated',
      })
    }

    /**
     * Handle invalid credentials error
     */
    if (error instanceof authErrors.E_INVALID_CREDENTIALS) {
      return ctx.response.status(401).send({
        error: ErrorCode.INVALID_CREDENTIALS,
        message: 'Invalid credentials provided',
      })
    }

    /**
     * Handle authorization/forbidden errors
     */
    if (
      error instanceof ForbiddenException ||
      (error instanceof Exception && error.code === 'E_AUTHORIZATION_FAILURE')
    ) {
      return ctx.response.status(403).send({
        error: ErrorCode.FORBIDDEN,
        message: error.message || 'Access denied',
      })
    }

    if (error instanceof BadRequestException) {
      return ctx.response.status(error.status).send({
        error: ErrorCode.BAD_REQUEST,
        message: error.message || 'Bad request',
      })
    }

    /**
     * Handle not found errors
     */
    if (error instanceof Exception && error.status === 404) {
      return ctx.response.status(404).send({
        error: ErrorCode.NOT_FOUND,
        message:
          error.code === 'E_ROW_NOT_FOUND'
            ? 'Resource not found'
            : error.message || 'Resource not found',
      })
    }

    /**
     * Forward the rest to the parent class
     */
    return super.handle(error, ctx)
  }

  /**
   * The method is used to report error to the logging service or
   * the a third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
