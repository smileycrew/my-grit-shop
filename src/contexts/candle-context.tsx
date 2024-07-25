"use client"

import { initialItems } from "@/lib/data"
import { TCandle } from "@/lib/types"
import { createContext, useState } from "react"

type TCandleContext = {
  candles: TCandle[]
  candleCount: number
  handleAddNewCandle: (newCandleData: TCandle) => void
  handleChangeSelectedCandleId: (candleId: number) => void
  handleDeleteCandle: (candleId: number) => void
  handleEditCandle: (updatedCandleData: TCandle) => void
  selectedCandle: TCandle | undefined
}

type TCandleContextProviderProps = {
  children: React.ReactNode
}

export const CandleContext = createContext<TCandleContext | null>(null)

export default function CandleContextProvider({
  children,
}: TCandleContextProviderProps) {
  const [candles, setCandles] = useState(initialItems)
  const [selectedCandleId, setSelectedCandleId] = useState(0)

  const candleCount = candles.length
  const selectedCandle = candles.find(
    (candle) => candle.id === selectedCandleId
  )

  const handleAddNewCandle = (newCandleData: TCandle) => {
    newCandleData.id = Date.now()

    setCandles([...candles, newCandleData])
  }
  // TODO I HAVE NOT USED THIS YET
  const handleChangeSelectedCandleId = (candleId: number) => {
    setSelectedCandleId(candleId)
  }

  const handleDeleteCandle = (candleId: number) => {
    const newCandlesList = candles.filter((candle) => candle.id !== candleId)

    setCandles(newCandlesList)
  }

  const handleEditCandle = (updatedCandleData: TCandle) => {
    const updatedCandleList = candles.map((candle) => {
      if (candle.id === updatedCandleData.id) {
        return {
          id: candle.id,
          name: updatedCandleData.name,
          price: updatedCandleData.price,
        }
      }

      return candle
    })

    setCandles(updatedCandleList)
  }
  return (
    <CandleContext.Provider
      value={{
        candles,
        candleCount,
        handleAddNewCandle,
        handleChangeSelectedCandleId,
        handleDeleteCandle,
        handleEditCandle,
        selectedCandle,
      }}
    >
      {children}
    </CandleContext.Provider>
  )
}
