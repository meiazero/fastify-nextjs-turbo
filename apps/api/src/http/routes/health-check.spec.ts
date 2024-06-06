import type { FastifyInstance } from "fastify"
import fastify from "fastify"
import assert from "node:assert"
import { after, before, describe, it } from "node:test"
import { healthCheck } from "./health-check"

describe("Health Check", () => {
	let _server: FastifyInstance
	before(async () => {
		_server = await fastify({ logger: false })
		_server.register(healthCheck)
	})

	after(async () => {
		await _server.close()
	})

	it("Should be return status OK", async () => {
		const response = await _server.inject({
			method: "GET",
			url: "/healthcheck",
		})

		const expected = {
			status: "OK",
		}

		const actual = JSON.parse(response.body)

		assert.strictEqual(response.statusCode, 200)
		assert.strictEqual(actual.status, expected.status)
	})
})
