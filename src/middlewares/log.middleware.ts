import { Request, Response, NextFunction } from 'express'

export function logMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`Starting`)
  console.log(`method: ${req.method} - url: ${req.url}`)
  console.log(`Ending`)
  next()
}
