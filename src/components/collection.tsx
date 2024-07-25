"use client"

import Image from "next/image"
import { Card } from "./ui/card"
import placeholderImg from "../../public/candle-one.png"
import SectionBackground from "./section-background"
import { useCandleContext } from "@/lib/hooks"
import { TCandleForm } from "@/lib/validations"
import Link from "next/link"

export default function Collection() {
  const { candles } = useCandleContext()

  return (
    <ul className="gap-10 flex flex-wrap items-center justify-center py-10 relative">
      <SectionBackground hexColor="FDFBF7" />
      {candles.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </ul>
  )
}

type TItemProps = {
  data: TCandleForm
}

function Item({ data }: TItemProps) {
  return (
    <li className="group">
      <Link href={`/shop/${data.id}`}>
        {/* TODO I AM NOT A BIG FAN OF THE BORDER NONE */}
        <Card className="bg-[#FDFBF7] border-none flex flex-col items-center overflow-hidden text-[#0B3471]">
          <Image
            alt="candle"
            height={250}
            priority
            src={placeholderImg}
            width={250}
          />
          <div className="py-5 text-center">
            <p className="font-semibold group-hover:underline transition">
              {data.name}
            </p>
            <p>${data.price}</p>
          </div>
        </Card>
      </Link>
    </li>
  )
}
