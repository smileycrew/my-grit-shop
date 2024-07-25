import SectionBackground from "./section-background"
import HeroImage from "./hero-image"
import ShopCard from "./shop-card"

export default function Hero() {
  return (
    <div className="flex gap-14 justify-center py-10 relative">
      {/* TODO FIX THIS BACKGROUND SECIONT */}
      <SectionBackground hexColor="FDFBF7" />

      <ShopCard />

      <HeroImage />
    </div>
  )
}
