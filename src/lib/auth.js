import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db('bazar_dor_project');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },

    database: mongodbAdapter(db, {
    client,
  }),
});