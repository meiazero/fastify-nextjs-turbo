import "fastify";

import { OAuth2Namespace } from "@fastify/oauth2";

declare module "fastify" {
  export interface FastifyRequest {
    googleOAuth2: OAuth2Namespace;
    getCurrentUserId(): Promise<string>;

    reqId: string;
    sesId: string;
    ids: {
      reqId: string;
      sesId: string;
    };
  }
}

export {};
