"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useOrganizationList } from "@clerk/nextjs"

export const OrgControl = () => {

  const params = useParams<{ id: string }>()
  const { setActive } = useOrganizationList()

  useEffect(() => {
    if (!setActive) return

    setActive({
      organization: params.id
    })
  }, [setActive, params.id])


  return null
}
