import * as winston from "winston"

const isProd = process.env.NODE_ENV === "production"

const format = winston.format.combine(
  winston.format.errors({ stack: true }),
  winston.format.colorize(),
  winston.format.align(),
  winston.format.simple()
)

const transportConsole = new winston.transports.Console({ format })

export const logger = winston.createLogger({
  level: isProd ? "info" : "debug",
  transports: [transportConsole],
})
