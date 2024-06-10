import { Plus } from "lucide-react"
import Container from "../container"
import Logo from "../logo"
import { Button } from "../ui/button"
import { MyUserButton } from "../my-user-button"
import { MyOrganizationSwitcher } from "../my-organization-switcher"
import MobileSidebar from "./sidebar-mobile"

const DashboardNavbar = () => {
  return (
    <header className="fixed z-50 top-0 h-14 w-full bg-white flex items-center border-b shadow-sm">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileSidebar />
          <div className="flex items-center gap-4">
            <Logo className="hidden md:flex" />
            <Button variant="primary" className="hidden md:block">Create</Button>
            <Button variant="primary" size="icon" className="md:hidden"><Plus className="size-4" /></Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MyOrganizationSwitcher />
          <MyUserButton />
        </div>
      </Container>
    </header>
  )
}

export default DashboardNavbar
