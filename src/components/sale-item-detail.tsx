"use client"

import Link from "next/link"
import SaleItemOptions from "./sale-item-options"
import { Button } from "./ui/button"
import { ArrowRightIcon, Share2Icon } from "@radix-ui/react-icons"
import Image from "next/image"
import placeholderImg from "../../public/candle-one.png"
import { useCandleContext } from "@/lib/hooks"

export default function SaleItemDetail() {
  const { candleOfTheDay } = useCandleContext()
  return (
    <div className="flex gap-16 items-center justify-center py-10 text-[#7789A7]">
      <Image
        alt="daily-item"
        className="border rounded-lg shadow-md"
        height={450}
        priority
        src={placeholderImg}
        width={450}
      />

      <div className="flex flex-col gap-3">
        <p>Candle of the day</p>
        <p className="font-medium text-3xl text-[#0B3471]">
          {candleOfTheDay.name}
        </p>

        <SaleItemPrice>{candleOfTheDay.price}</SaleItemPrice>

        <p>Shipping details can go here</p>

        {/* TODO COME BACK TO CHECK THIS */}
        <SaleItemOptions />

        <small className="text-[#0B3471] text-center underline">
          <Link href="/">More payment options</Link>
        </small>

        {/* TODO NEED TO FIND A WAY TO TIE THIS INTO THE PARENT ELEMENT SO
              THAT WHEN IT IS HOVERED I MOVE THE ICONS */}
        {/* TODO THIS NEEDS TO BE A REUSABLE COMPONENT TO UNDERLINE STUFF */}
        <div className="flex justify-between">
          <OptionalItem type="share">Share</OptionalItem>
          <OptionalItem type="itemDetail">More detail</OptionalItem>
        </div>
      </div>
    </div>
  )
}

function SaleItemPrice({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-[#0B3471]">${children}</p>
      <Button
        asChild
        className="bg-[#0B3471] hover:bg-[#0B3471] rounded-full shadow-none"
      >
        <p>Sale</p>
      </Button>
    </div>
  )
}

type TOptionItemProps = {
  children: React.ReactNode
  type: "share" | "itemDetail"
}

function OptionalItem({ children, type }: TOptionItemProps) {
  return (
    <div className="cursor-pointer flex gap-1 group items-center text-[#0B3471]">
      {type === "share" ? (
        <>
          <p className="group-hover:-translate-y-[2px] transition">
            <Share2Icon />
          </p>
          <p className="group-hover:underline">{children}</p>
        </>
      ) : (
        <>
          <p className="group-hover:underline">{children}</p>
          <p className="group-hover:translate-x-[2px] transition">
            <ArrowRightIcon />
          </p>
        </>
      )}
    </div>
  )
}
