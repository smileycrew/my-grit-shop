import { cn } from "@/lib/utils"

type TH1Props = {
  children: React.ReactNode
  className: string
}

export default function H1({ children, className }: TH1Props) {
  return (
    <h1
      className={cn(
        "font-semibold hover:text-[#0B3471] text-[#0B3471]/80 text-3xl transition",
        className
      )}
    >
      {children}
    </h1>
  ) 
}
