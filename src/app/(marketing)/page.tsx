import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import placeholderImg from "../../../public/600x400.svg"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-14">
        <div className="self-center">
          <Card className="shadow-none">
            <CardHeader>
              <p className="text-3xl">Crafted with love</p>
            </CardHeader>

            <CardContent>
              <Button>Shop now</Button>

              <CardDescription>
                This text will stretch the card need to change
              </CardDescription>
            </CardContent>

            {/* s */}
          </Card>
        </div>

        <div>
          <p>Ad image can go here</p>
          <Image
            alt="placeholder-image-url"
            height={400}
            src={placeholderImg}
            width={600}
          />
        </div>
      </div>
    </main>
  )
}
