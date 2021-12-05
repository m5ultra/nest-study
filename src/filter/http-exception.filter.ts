import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const message = exception.getResponse()
    const code = exception.getStatus()
    // 可以优化做些判断
    const errorResponse = {
      code, // 自定义code
      msg: message, // 获取全部的错误信息
    }
    const status =
      exception instanceof HttpException
        ? code
        : HttpStatus.INTERNAL_SERVER_ERROR
    // 设置返回的状态码、请求头、发送错误信息
    response.status(status)
    response.header('Content-Type', 'application/json; charset=utf-8')
    response.send(errorResponse)
  }
}
