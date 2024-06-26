import Container from "@/components/container"
import AppSidebar from "@/components/dashboard/sidebar"

type Props = {
  children: React.ReactNode
}

const OrganizationLayout = ({ children }: Props) => {
  return (
    <div className="grow py-5 flex">
      <Container className="flex gap-6 px-0">
        <div className="w-64 shrink-0 hidden md:block">
          <AppSidebar />
        </div>
        {children}
      </Container>
    </div>
  )
}

export default OrganizationLayout
