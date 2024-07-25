"use client"

import Collection from "@/components/collection"
import PageTitle from "@/components/page-title"
import SectionBackground from "@/components/section-background"
import { useCandleContext } from "@/lib/hooks"

export default function Page() {
  const { candles, candleCount } = useCandleContext()

  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 relative">
        <SectionBackground hexColor="FDFBF7" />

        <PageTitle className="self-start">Products</PageTitle>

        <p className="self-end">{candleCount} products</p>
      </div>

      <Collection candles={candles} />
    </>
  )
}
