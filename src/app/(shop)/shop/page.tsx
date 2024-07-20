import Collection from "@/components/collection"
import SectionBackground from "@/components/section-background"

export default function Page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 relative">
        <SectionBackground hexColor="FDFBF7" />
        <p className="font-semibold self-start text-4xl text-[#0B3471]">
          Products
        </p>

        <p className="self-end">8 products</p>
      </div>
      <Collection />
    </div>
  )
}
