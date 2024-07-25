import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

export default function ShopCard() {
  return (
    <Card className="bg-[#7789A7] border-none h-[300px] self-center shadow-none text-white w-[300px]">
      <CardHeader className="text-3xl">Title placeholder here</CardHeader>

      <CardContent>
        <Button
          asChild
          className="bg-[#0B3471] hover:bg-[#0B3471]/90 shadow-none"
        >
          <Link href="/shop">Shop now</Link>
        </Button>
      </CardContent>

      <CardFooter>
        <CardDescription className="text-white/80">
          This text will stretch the card need to change
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
