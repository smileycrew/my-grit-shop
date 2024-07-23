import { cn } from "@/lib/utils"

type TPageTitleProps = {
  children: React.ReactNode
  className?: String
}

export default function PageTitle({ children, className }: TPageTitleProps) {
  return (
    <p className={cn("font-semibold text-4xl text-[#0B3471]", className)}>
      {children}
    </p>
  )
}
