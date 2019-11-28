import * as winston from "winston"

const isProd = process.env.NODE_ENV === "production"

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.align(),
  winston.format.simple()
)

const transportConsole = new winston.transports.Console({ format })

export const logger = winston.createLogger({
  level: isProd ? "error" : "debug",
  transports: [transportConsole],
})
