import { defineConfig } from "drizzle-kit";

console.log(process.env.DATABASE_URL);


if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL must be a Neon postgres connection string");
}

export default defineConfig({
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
    schema: "./db/schema.ts",
});
