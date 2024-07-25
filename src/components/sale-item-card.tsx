import { Card, CardContent } from "./ui/card"
import SaleItemDetail from "./sale-item-detail"

export default function SaleItemCard() {
  return (
    <Card className="overflow-hidden bg-[#FDFBF7] rounded-none">
      <CardContent>
        <SaleItemDetail />
      </CardContent>
    </Card>
  )
}
