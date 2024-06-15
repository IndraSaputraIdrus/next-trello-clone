import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { board } from "./schema";

export type BoardInsert = InferInsertModel<typeof board>
export type BoardSelect = InferSelectModel<typeof board>
