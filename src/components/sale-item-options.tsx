"use client"

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import QuantityButtonGroup from "./quantity-button-group"

const purchaseOptions = [
  {
    id: 1,
    size: "1 oz tin",
  },
  {
    id: 2,
    size: "2 oz tin",
  },
  {
    id: 3,
    size: "3 oz tin",
  },
  {
    id: 4,
    size: "4 oz tin",
  },
]

export default function SaleItemOptions() {
  const [chosenOptionId, setChosenOptionId] = useState(1)
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
  const handleChooseOption = (optionId: number) => {
    setChosenOptionId(optionId)
  }
  return (
    <>
      <ul className="flex flex-wrap gap-3">
        {purchaseOptions.map((option) => (
          <Button
            className={cn(
              "bg-white border text-inherit hover:bg-[white] hover:border-[#0B3471]",
              {
                "bg-[#0B3471] hover:bg-[#0B3471]/90 text-white":
                  option.id === chosenOptionId,
              }
            )}
            key={option.id}
            onClick={() => handleChooseOption(option.id)}
          >
            {option.size}
          </Button>
        ))}
      </ul>
      {/* TODO POSSIBLY COMBINE THIS INTO 3 COMPONENTS TO CREATE A SINGLE LOOKING UI */}

      <QuantityButtonGroup quantity={quantity} onClick={handleChangeQuantity} />

      <Button>Add to card</Button>
    </>
  )
}
