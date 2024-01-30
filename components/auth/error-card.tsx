import CardWrapper from "@/components/auth/card-wrapper"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center justify-center w-full text-destructive">
        <ExclamationTriangleIcon className="w-10 h-10" />
      </div>
    </CardWrapper>
  )
}
export default ErrorCard
