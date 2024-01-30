import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons"

interface FormSuccessProps {
  message?: string
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null

  return (
    <div className="flex items-center p-3 text-sm rounded-md text-emerald-500 bg-emerald-500/15 gap-x-2">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  )
}
export default FormSuccess
