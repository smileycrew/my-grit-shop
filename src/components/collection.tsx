import Image from "next/image"
import { Card } from "./ui/card"
import placeholderImg from "../../public/candle-one.png"
import SectionBackground from "./section-background"

export default function Collection() {
  return (
    <ul className="gap-10 flex flex-wrap items-center justify-center py-10 relative">
      <SectionBackground hexColor="FDFBF7" />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ul>
  )
}

function Item() {
  return (
    <li>
      {/* TODO I AM NOT A BIG FAN OF THE BORDER NONE */}
      <Card className="bg-[#FDFBF7] border-none flex flex-col items-center overflow-hidden text-[#0B3471]">
        <Image alt="candle" height={250} src={placeholderImg} width={250} />
        <div className="py-5 text-center">
          <p className="font-semibold">Name of candle</p>
          <p>$2.99</p>
        </div>
      </Card>
    </li>
  )
}
