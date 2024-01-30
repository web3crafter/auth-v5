import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ExtendedUser } from "@/next-auth"

interface UserInfoRowProps {
  label: string
  prop?: string | null | undefined
}

const UserInfoRow = ({ label, prop }: UserInfoRowProps) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <p className="text-sm font-medium">{label}</p>
      <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md p-1">
        {prop}
      </p>
    </div>
  )
}

interface UserInfoProps {
  user?: ExtendedUser
  label: string
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <UserInfoRow label="ID" prop={user?.id} />
        <UserInfoRow label="Name" prop={user?.name} />
        <UserInfoRow label="Email" prop={user?.email} />
        <UserInfoRow label="Role" prop={user?.role} />

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
export default UserInfo
