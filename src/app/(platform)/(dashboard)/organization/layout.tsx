import Container from "@/components/container"
import AppSidebar from "@/components/dashboard/sidebar"

type Props = {
  children: React.ReactNode
}

const OrganizationLayout = ({ children }: Props) => {
  return (
    <div className="pt-16 md:pt-20">
      <Container className="flex gap-6 *:border *:border-red-500">
        <AppSidebar />
        {children}
      </Container>
    </div>
  )
}

export default OrganizationLayout
