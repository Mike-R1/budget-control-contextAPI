import { ReactNode } from "react"

type ErrorMessageProps = {
  children: ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className=" bg-red-500 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  )
}
