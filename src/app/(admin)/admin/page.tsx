import CandleButton from "@/components/candle-button"
import CandleList from "@/components/candle-list"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen py-3">
      <div className="text-end">
        <CandleButton action="add" />
      </div>

      <CandleList />
    </div>
  )
}
