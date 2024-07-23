"use client"

import Image from "next/image"
import placeholderImg from "../../../../public/candle-one.png"
import { TrashIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import QuantityButtonGroup from "@/components/quantity-button-group"
import { useState } from "react"

export default function Page() {
  const [quantity, setQuantity] = useState(1)

  // TODO ADD A STRICT TYPE INSTEAD OF A GENERAL STRING TYPE
  const handleChangeQuantity = (action: String) => {
    if (action === "add") {
      setQuantity((prev) => prev + 1)
    } else if (action === "subtract") {
      setQuantity((prev) => {
        if (prev === 0) {
          return 0
        } else {
          return prev - 1
        }
      })
    }
  }
  return (
    <div>
      <p>My cart</p>

      <div>
        <div className="border-b flex justify-between">
          <p>product</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        <div className="grid grid-cols-4 items-center py-5">
          <Image
            alt="candle"
            className="border rounded-md"
            height={100}
            src={placeholderImg}
            width={100}
          />

          <div className="flex flex-col">
            <p>Name</p>
            <p>Price</p>
            <p>Size</p>
          </div>

          <div className="flex items-center gap-3">
            <QuantityButtonGroup
              quantity={quantity}
              onClick={handleChangeQuantity}
            />
            <Button size="icon">
              <TrashIcon />
            </Button>
          </div>

          <p className="text-end">$3.99</p>
        </div>
      </div>
    </div>
  )
}
