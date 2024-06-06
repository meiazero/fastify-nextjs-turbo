import oauthPlugin from "@fastify/oauth2";
import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

export const oAuth = fastifyPlugin(async (app: FastifyInstance) => {
  app.register(oauthPlugin, {
    name: "googleOAuth2",
    scope: ["profile", "email"],
    credentials: {
      client: {
        id: process.env.GOOGLE_OAUTH_CLIENT_ID!,
        secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION!,
    },
    callbackUri: `${process.env.HOST!}/auth/signin/oauth/callback`,
  });
});
