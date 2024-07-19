import Hero from "@/components/hero"
import placeholderImg from "../../../public/candle-one.png"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon, Share2Icon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="flex justify-center gap-16">
        <Image
          alt="daily-item"
          className="border rounded-md shadow-md"
          height={450}
          src={placeholderImg}
          width={450}
        />

        <div className="flex flex-col gap-3 min-w-[400px]">
          <p className="text-[#0B3471BF]">Candle category</p>

          <p className="font-medium text-3xl text-[#0B3471]">Candle name</p>

          <p className="text-[#0B3471]">$3.99 with sale?</p>

          <p className="text-[#0B3471BF]">Shipping detail?</p>

          <div className="flex gap-3">
            <Button>option 1</Button>
            <Button>option 2</Button>
            <Button>option 3</Button>
          </div>

          {/* TODO POSSIBLY COMBINE THIS INTO 3 COMPONENTS TO CREATE A SINGLE LOOKING UI */}
          <Input defaultValue={1} type="number" />

          <Button>Add to card</Button>

          <small className="text-center">More payment options???</small>

          <div className="flex justify-between">
            <div className="flex items-center">
              <Share2Icon />
              <p>Share</p>
            </div>

            <div className="flex items-center">
              <p>More details</p>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
