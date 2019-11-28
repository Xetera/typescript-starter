import "dotenv/config"
import { logger } from "./logger"

export const greet = (thing: string) => `Hello ${thing}`

const main = async () => {
  logger.info(greet("World"))
}

main()
