import Navbar from "@/app/(protected)/_components/navbar"

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800">
      <Navbar />
      {children}
    </div>
  )
}
export default ProtectedLayout
