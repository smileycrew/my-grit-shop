import CandleCount from "@/components/candle-count"
import Collection from "@/components/collection"
import PageTitle from "@/components/page-title"
import SectionBackground from "@/components/section-background"

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-between py-10 relative">
        <SectionBackground hexColor="FDFBF7" />

        <div className="flex justify-between w-full">
          <PageTitle>Products</PageTitle>

          <CandleCount />
        </div>
      </div>

      <Collection />
    </>
  )
}
