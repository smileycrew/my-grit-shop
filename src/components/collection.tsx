import Image from "next/image"
import { Card } from "./ui/card"
import placeholderImg from "../../public/candle-one.png"
import SectionBackground from "./section-background"
import { TCandle } from "@/lib/types"

type TCollectionProps = {
  candles: TCandle[]
}

export default function Collection({ candles }: TCollectionProps) {
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
  data: TCandle
}

function Item({ data }: TItemProps) {
  return (
    <li>
      {/* TODO I AM NOT A BIG FAN OF THE BORDER NONE */}
      <Card className="bg-[#FDFBF7] border-none flex flex-col items-center overflow-hidden text-[#0B3471]">
        <Image alt="candle" height={250} src={placeholderImg} width={250} />
        <div className="py-5 text-center">
          <p className="font-semibold">{data.name}</p>
          <p>${data.price}</p>
        </div>
      </Card>
    </li>
  )
}
