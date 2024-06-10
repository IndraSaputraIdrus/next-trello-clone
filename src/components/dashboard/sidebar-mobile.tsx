"use client"

import { useMobileSidebar } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent } from "../ui/sheet"
import AppSidebar from "./sidebar"

const MobileSidebar = () => {

  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  const isOpen = useMobileSidebar(state => state.isOpen)
  const onOpen = useMobileSidebar(state => state.onOpen)
  const onClose = useMobileSidebar(state => state.onClose)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <Button
        variant="ghost"
        className="flex md:hidden"
        size="icon"
        onClick={onOpen}
      >
        <Menu className="size-5" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className="p-2 pt-10"
        >
          <AppSidebar
            storageKey="t-sidebar-mobile-state"
          />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileSidebar
