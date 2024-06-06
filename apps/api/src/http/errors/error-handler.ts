import type { FastifyInstance } from "fastify";
import { ZodError } from "zod";

import { BadRequestError } from "./bad-request-error";
import { NotFoundError } from "./not-found-error";
import { UnauthorizedError } from "./unauthorized-error";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Validation error",
      errors: error.flatten().fieldErrors,
    });
  }

  if (error instanceof BadRequestError) {
    return reply.status(400).send({
      message: error.message,
    });
  }

  if (error instanceof UnauthorizedError) {
    return reply.status(401).send({
      message: error.message,
    });
  }

  if (error instanceof NotFoundError) {
    return reply.status(404).send({
      message: error.message,
    });
  }

  if (error.statusCode === 429) {
    return reply.status(429).send({
      message: error.message,
    });
  }

  console.error(error);
  return reply.status(500).send({
    message: "Internal server error",
  });
};
