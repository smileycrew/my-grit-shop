import { CandleContext } from "@/contexts/candle-context"
import { useContext } from "react"

export function useCandleContext() {
  const context = useContext(CandleContext)

  if (!context) {
    throw new Error(
      "useCandleContext must be used within a CandleContextProvider component."
    )
  }

  return context
}
