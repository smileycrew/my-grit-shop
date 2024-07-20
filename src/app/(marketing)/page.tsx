import Collection from "@/components/collection"
import Hero from "@/components/hero"
import Newsletter from "@/components/newsletter"
import SaleItem from "@/components/sale-item"

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="py-10">
        <SaleItem />
      </div>

      <Collection />

      <Newsletter />
    </main>
  )
}
