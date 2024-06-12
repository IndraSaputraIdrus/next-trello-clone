"use client"

import { OrganizationProfile, useOrganization } from "@clerk/nextjs"

export const OrgSetting = () => {
  const {
    isLoaded
  } = useOrganization()

  if (!isLoaded) {
    return (
      <h1>Loading ...</h1>
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
