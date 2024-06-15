import { migrate } from "drizzle-orm/libsql/migrator"
import { db, connection } from "."

try {
  await migrate(db, { migrationsFolder: "./drizzle" })
  console.log("Migration success")
} catch (error) {
  console.log(error)
} finally {
  connection.close()
  console.log("Migration Complete")
  process.exit()
}
