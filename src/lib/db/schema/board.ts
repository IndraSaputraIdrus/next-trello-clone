import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core"

export const board = sqliteTable("boards", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }).notNull(),
  title: text("title", { length: 255 }).notNull()
})
