import Fastify from "fastify"
import type { FastifyInstance } from "fastify"
import routes from "./routes/index.js"


const app: FastifyInstance = Fastify({
    logger: true
})

app.register(routes)

export default app

