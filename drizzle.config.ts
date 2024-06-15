import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/db/schema/*",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL!
  },
  strict: true,
  verbose: true
})
