import { UserButton } from "@clerk/nextjs"
import { UserButtonProps } from "@clerk/types"

export const MyUserButton = ({
  afterSignOutUrl = "/",
  ...props
}: UserButtonProps) => {

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

