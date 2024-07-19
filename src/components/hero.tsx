import Link from "next/link"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card"
import Image from "next/image"
import placeholderImg from "../../public/600x400.svg"

export default function Hero() {
  return (
    <div className="flex gap-14 h-[500px]">
      <Card className="bg-[#7789a7] border-none h-[300px] self-center shadow-none w-[300px]">
        <CardHeader>
          <p className="text-3xl text-[#FDFBF7]">Title placeholder here</p>
        </CardHeader>

        <CardContent>
          <Button
            asChild
            className="bg-[#0b3471] hover:bg-[#0b3471]/90 shadow-none"
          >
            <Link href="/shop">
              <p>Shop now</p>
            </Link>
          </Button>
        </CardContent>

        <CardFooter>
          <CardDescription className="text-[#FDFBF7]/90">
            This text will stretch the card need to change
          </CardDescription>
        </CardFooter>
      </Card>

      <div className="self-center">
        <p>Ad image can go here</p>
        <Image
          alt="placeholder-image-url"
          className="rounded-xl shadow-sm"
          height={400}
          src={placeholderImg}
          width={600}
        />
      </div>
    </div>
  )
}
