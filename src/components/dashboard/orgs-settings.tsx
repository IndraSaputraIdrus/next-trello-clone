"use client"

import { OrganizationProfile, useOrganization } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"

export const OrgSetting = () => {
  const {
    isLoaded
  } = useOrganization()

  if (!isLoaded) {
    return (
      <div className="grow flex items-center justify-center w-full h-full">
        <Loader2 className="animate-spin size-10" />
      </div>
    )
  }

  return (
    <OrganizationProfile
      appearance={{
        elements: {
          rootBox: {
            width: "100%",
            height: "100%"
          },
          cardBox: {
            boxShadow: "none",
            width: "100%",
            height: "100%",
            marginInline: "auto",
            borderRadius: "10px",
          },
          navbar: {
            maxWidth: "100%",
            width: "100%",
          },
          scrollBox: {
            borderRadius: "0"
          }
        }
      }}
    />
  )
}
