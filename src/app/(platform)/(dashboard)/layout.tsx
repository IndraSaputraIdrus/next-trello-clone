import DashboardNavbar from "@/components/dashboard/navbar"

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-dvh flex flex-col">
      <DashboardNavbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
