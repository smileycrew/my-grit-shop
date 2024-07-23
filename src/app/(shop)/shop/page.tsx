import Collection from "@/components/collection"
import PageTitle from "@/components/page-title"
import SectionBackground from "@/components/section-background"

export default function Page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 relative">
        <SectionBackground hexColor="FDFBF7" />

        <PageTitle className="self-start">Products</PageTitle>

        <p className="self-end">8 products</p>
      </div>
      <Collection />
    </div>
  )
}
