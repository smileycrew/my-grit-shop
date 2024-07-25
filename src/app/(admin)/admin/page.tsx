import CandleButton from "@/components/candle-button"
import CandleList from "@/components/candle-list"

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
