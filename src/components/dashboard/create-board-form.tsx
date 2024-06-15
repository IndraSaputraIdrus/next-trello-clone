"use client"

import { createBoard } from "@/actions/create-board"
import { useAction } from "@/hooks/use-action"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export const CreateBoardForm = () => {
  const {
    execute,
    fieldErrors,
  } = useAction(createBoard, {
    onSuccess: (data) => {
      formRef?.current?.reset()
      alert(`SUCCESS, board title: ${data.title}`)
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string

    execute({
      title
    })
  }

  const formRef = useRef<HTMLFormElement>(null)


  return (
    <div>
      <h2>Create</h2>
      <form ref={formRef} action={onSubmit}>
        {fieldErrors ? <p className="text-rose-500">{fieldErrors.title}</p> : null}
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border border-black p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

