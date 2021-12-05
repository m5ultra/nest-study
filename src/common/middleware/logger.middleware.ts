import { Request, Response, NextFunction } from 'express'
import { Logger } from '@nestjs/common'
const Log = new Logger('logger.middleware.ts')
export function logger(req: Request, res: Response, next: NextFunction) {
  const { method, path } = req
  Log.log(`${method} ${path}`)
  next()
}
