import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRightIcon, Share2Icon } from "@radix-ui/react-icons"
import placeholderImg from "../../public/candle-one.png"
import Link from "next/link"
import SaleItemOptions from "./sale-item-options"

export default function SaleItem() {
  return (
    <Card className="overflow-hidden bg-[#FDFBF7] rounded-none">
      <CardContent className="flex items-center justify-center py-10 text-[#7789A7]">
        <div className="flex justify-center gap-16">
          <Image
            alt="daily-item"
            className="border rounded-lg shadow-md"
            height={450}
            src={placeholderImg}
            width={450}
          />

          <div className="flex flex-col gap-3 min-w-[400px]">
            <p>Candle category</p>
            <p className="font-medium text-3xl text-[#0B3471]">Candle name</p>
            <div className="flex gap-3 items-center">
              <p className="text-[#0B3471]">
                <span className="line-through ">$9.99</span>
                $3.99
              </p>
              <Button
                asChild
                className="bg-[#0B3471] hover:bg-[#0B3471] rounded-full shadow-none"
              >
                <p>Sale</p>
              </Button>
            </div>
            <p>Shipping details can go here</p>
            <SaleItemOptions />
            <Link className="text-[#0B3471] text-center underline" href="/">
              <small>More payment options???</small>
            </Link>
            {/* TODO NEED TO FIND A WAY TO TIE THIS INTO THE PARENT ELEMENT SO
              THAT WHEN IT IS HOVERED I MOVE THE ICONS */}
            {/* TODO THIS NEEDS TO BE A REUSABLE COMPONENT TO UNDERLINE STUFF */}
            <div className="flex justify-between text-[#0B3471]">
              <div className="flex hover:underline items-center">
                <Share2Icon className="hover:-translate-y-1 transition" />
                <p>Share</p>
              </div>

              <div className="flex hover:underline items-center text-[#0B3471]">
                <p>More details</p>
                <ArrowRightIcon className="hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
