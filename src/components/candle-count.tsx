"use client"

import { useCandleContext } from "@/lib/hooks"

export default function CandleCount() {
  const { candleCount } = useCandleContext()
  return (
    <p className="self-end">
      {candleCount} {candleCount === 1 ? "Product" : "Products"}
    </p>
  )
}
