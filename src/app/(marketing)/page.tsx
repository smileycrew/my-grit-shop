import Collection from "@/components/collection"
import Hero from "@/components/hero"
import Newsletter from "@/components/newsletter"
import SaleItem from "@/components/sale-item-card"

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="my-10">
        <SaleItem />
      </div>

      <Collection />

      <Newsletter />
    </main>
  )
}
