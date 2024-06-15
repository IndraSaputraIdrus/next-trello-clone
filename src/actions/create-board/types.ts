import { z } from "zod"
import { BoardInsert } from "@/lib/db/types"

import { ActionState } from "@/lib/create-safe-action"
import { CreateBoardSchema } from "./schema"

export type InputType = z.infer<typeof CreateBoardSchema>
export type ReturnType = ActionState<InputType, BoardInsert>
