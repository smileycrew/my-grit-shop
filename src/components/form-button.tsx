import { Button } from "./ui/button"

export default function FormButton({
  children,
}: {
  children: React.ReactNode
}) {
  return <Button>{children}</Button>
}
