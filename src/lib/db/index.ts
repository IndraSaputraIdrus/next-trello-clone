import { drizzle } from "drizzle-orm/libsql"
import * as schema from "./schema"
import { createClient } from "@libsql/client"

export const connection = createClient({
  url: process.env.DATABASE_URL!
})


export const db = drizzle(connection, { schema })
