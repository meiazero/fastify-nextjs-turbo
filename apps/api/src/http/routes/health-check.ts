import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import type { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"

export async function healthCheck(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get(
		"/healthcheck",
		{
			schema: {
				tags: ["Health check"],
				summary: "Status",
				response: {
					200: z.object({
						status: z.string(),
					}),
				},
			},
		},
		async (request: FastifyRequest, reply: FastifyReply) => {
			return reply.status(200).send({ status: "OK" })
		},
	)
}
