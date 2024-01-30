import LoginButton from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"
import { fontPoppins } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "flex items-center text-6xl font-semibold text-white drop-shadow-md",
            fontPoppins.className
          )}
        >
          <span className="text-5xl">🔐</span>
          Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
