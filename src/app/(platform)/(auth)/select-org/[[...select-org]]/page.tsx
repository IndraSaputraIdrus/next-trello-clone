import { OrganizationList } from "@clerk/nextjs"

const OrganizationSelectPage = () => {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  )
}

export default OrganizationSelectPage
