import DashboardNavbar from "@/components/dashboard/navbar"

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-dvh flex flex-col">
      <DashboardNavbar />
      {children}
    </div>
  )
}

export default DashboardLayout
