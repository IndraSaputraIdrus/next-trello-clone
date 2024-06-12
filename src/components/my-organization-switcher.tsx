"use client"

import { OrganizationSwitcher, useOrganizationList } from "@clerk/nextjs"
import { OrganizationSwitcherProps } from "@clerk/types"
import { Skeleton } from "./ui/skeleton"

export const MyOrganizationSwitcher = (props: OrganizationSwitcherProps) => {
  const { isLoaded } = useOrganizationList()

  if (!isLoaded) {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="size-[20px] rounded-md" />
        <Skeleton className="h-[18px] w-[80px] rounded-md" />
      </div>
    )
  }

  return (
    <OrganizationSwitcher
      {...props}
      hidePersonal
      afterCreateOrganizationUrl="/organization/:id"
      afterLeaveOrganizationUrl="/organization/:id"
      afterSelectOrganizationUrl="/organization/:id"
    />
  )
}
