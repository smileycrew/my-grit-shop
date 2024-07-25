"use client"

import { initialItems } from "@/lib/data"
import { TCandleEssentials } from "@/lib/types"
import { TCandleForm } from "@/lib/validations"
import { createContext, useState } from "react"

const randomNumber = Math.floor(Math.random())

type TCandleContext = {
  candles: TCandleForm[]
  candleCount: number
  candleOfTheDay: TCandleForm
  handleAddNewCandle: (newCandleData: TCandleEssentials) => void
  handleChangeSelectedCandleId: (candleId: number) => void
  handleDeleteCandle: (candleId: number) => void
  handleEditCandle: (
    candleId: number,
    updatedCandleData: TCandleEssentials
  ) => void
  selectedCandle: TCandleForm | undefined
}

type TCandleContextProviderProps = {
  children: React.ReactNode
}

export const CandleContext = createContext<TCandleContext | null>(null)

export default function CandleContextProvider({
  children,
}: TCandleContextProviderProps) {
  // TODO WHEN USING PRISMA THIS SHOULD RETURN THE INVENTORY FOR THE CANDLE
  const [candles, setCandles] = useState(initialItems)
  const [selectedCandleId, setSelectedCandleId] = useState(0)

  const candleCount = candles.length
  const candleOfTheDay = candles[randomNumber * candleCount]
  const selectedCandle = candles.find(
    (candle) => candle.id === selectedCandleId
  )

  const handleAddNewCandle = (newCandleData: TCandleEssentials) => {
    setCandles([...candles, { ...newCandleData, id: Date.now() }])
  }
  // TODO I HAVE NOT USED THIS YET
  const handleChangeSelectedCandleId = (candleId: number) => {
    setSelectedCandleId(candleId)
  }

  const handleDeleteCandle = (candleId: number) => {
    const newCandlesList = candles.filter((candle) => candle.id !== candleId)

    setCandles(newCandlesList)
  }

  const handleEditCandle = (
    candleId: number,
    updatedCandleData: TCandleEssentials
  ) => {
    const updatedCandleList = candles.map((candle) => {
      if (candle.id === candleId) {
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
        candleOfTheDay,
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
