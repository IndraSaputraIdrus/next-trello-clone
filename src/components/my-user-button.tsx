"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { UserButtonProps } from "@clerk/types"
import { Skeleton } from "./ui/skeleton"

export const MyUserButton = ({
  afterSignOutUrl = "/",
  ...props
}: UserButtonProps) => {

  const { isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <Skeleton className="size-[30px] rounded-full" />
    )
  }

  return (
    <UserButton
      {...props}
      afterSignOutUrl={afterSignOutUrl}
      appearance={{
        elements: {
          avatarBox: {
            width: 30,
            height: 30
          }
        }
      }}
    />
  )
}

