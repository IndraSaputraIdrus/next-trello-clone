"use client"

import Link from "next/link"
import { Plus } from "lucide-react"
import { useLocalStorage } from "usehooks-ts"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { Skeleton } from "../ui/skeleton"
import { Accordion } from "../ui/accordion"
import { SidebarItem } from "./sidebar-item"

type Props = {
  storageKey?: string
}

const AppSidebar = ({ storageKey = "t-sidebar-state" }: Props) => {

  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {})
  const { organization: activeOrganization, isLoaded: isLoadedOrganization } = useOrganization()
  const { userMemberships, isLoaded: isLoadedOrganizationList } = useOrganizationList({
    userMemberships: {
      infinite: true
    }
  })

  const defaultAccordionValue: Array<string> = Object.keys(expanded).filter((key: string) => expanded[key])

  const onExpand = (id: string) => {
    setExpanded(curr => ({
      ...curr,
      [id]: !expanded[id]
    }))
  }

  if (!isLoadedOrganization || !isLoadedOrganizationList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    )
  }

  return (
    <aside
      className="w-64 shrink-0 hidden md:block"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Workspaces</h3>
        <Button asChild size="icon" variant="ghost">
          <Link href="/select-org">
            <Plus className="size-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships?.data.map(({ organization }) => (
        <SidebarItem 
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </aside>
  )
}

export default AppSidebar
