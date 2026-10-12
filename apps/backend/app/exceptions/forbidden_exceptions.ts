import { AppException } from './app_exceptions.ts'
import { ErrorCode } from './error_codes.ts'

export default class ForbiddenException extends AppException {
    static status = 403
    static code = ErrorCode.FORBIDDEN

    constructor(message: string = 'Access denied') {
        super(message, { status: 403, code: ErrorCode.FORBIDDEN })
    }
}