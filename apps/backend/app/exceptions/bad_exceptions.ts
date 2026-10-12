import { AppException } from './app_exceptions.ts'
import { ErrorCode } from './error_codes.ts'

export default class BadRequestException extends AppException {
  static status = 400
  static code = ErrorCode.BAD_REQUEST

  constructor(message: string = 'Bad request') {
    super(message, { status: 400, code: ErrorCode.BAD_REQUEST })
  }
}