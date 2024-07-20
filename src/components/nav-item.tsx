"use client"

import { TRoute } from "@/lib/types"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
  children: React.ReactNode
  route: TRoute
}

export default function NavItem({ children, route }: NavItemProps) {
  const activePathname = usePathname()

  return (
    <li>
      <Link
        className={cn("border-[#0B3471] hover:border-b hover:text-[#0B3471]", {
          "border-b font-semibold hover:border-b-2 text-[#0B3471]":
            route.path === activePathname,
        })}
        href={route.path}
      >
        {children}
      </Link>
    </li>
  )
}
