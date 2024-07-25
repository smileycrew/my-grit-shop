"use client"

import Collection from "@/components/collection"
import Hero from "@/components/hero"
import Newsletter from "@/components/newsletter"
import SaleItem from "@/components/sale-item"
import { useCandleContext } from "@/lib/hooks"
// TODO IS THERE ANY WAY TO PREVENT THIS FROM BEING A CLIENT COMPONENT?!
export default function Home() {
  const { candles } = useCandleContext()
  return (
    <main>
      <Hero />

      <div className="py-10">
        <SaleItem />
      </div>

      <Collection candles={candles} />

      <Newsletter />
    </main>
  )
}
