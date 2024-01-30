import { fontPoppins } from "@/lib/fonts"
import { cn } from "@/lib/utils"

interface HeaderProps {
  label: string
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-4">
      <h1
        className={cn(
          "flex items-stretch gap-1 text-3xl font-semibold",
          fontPoppins.className
        )}
      >
        <span className="text-2xl">🔐</span>
        Auth
      </h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
export default Header
