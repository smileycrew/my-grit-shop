"use client"

import { TCandleForm } from "@/lib/validations"
import CandleButton from "./candle-button"
import { useCandleContext } from "@/lib/hooks"

export default function CandleList() {
  const { candles, handleDeleteCandle } = useCandleContext()

  return (
    <ul>
      {candles.map((candle) => (
        <CandleItem
          candle={candle}
          key={candle.id}
          onClick={() => handleDeleteCandle(candle.id)}
        />
      ))}
    </ul>
  )
}

type TCandleItemProps = {
  candle: TCandleForm
  onClick: () => void
}

function CandleItem({ candle, onClick }: TCandleItemProps) {
  return (
    <li
      className="border-b gap-3 grid grid-cols-[2fr,2fr,1fr,1fr] py-3"
      key={candle.id}
    >
      <p>{candle.name}</p>
      <p>${candle.price.toFixed(2)}</p>

      <CandleButton action="edit" chosenCandle={candle} />

      <CandleButton action="delete" onClick={onClick} />
    </li>
  )
}
