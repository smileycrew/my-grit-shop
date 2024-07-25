import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"

type TQuantityButtonGroupProps = {
  quantity: number
  onClick: (action: "subtract" | "add") => void
}

export default function QuantityButtonGroup({
  quantity,
  onClick,
}: TQuantityButtonGroupProps) {
  return (
    <div className="border flex items-center rounded-md self-start text-center">
      <Button
        className="bg-transparent border-none hover:bg-transparent shadow-none text-black/30"
        disabled={quantity === 1 || quantity < 1}
        // TODO ABSTRACT THIS SO THAT THE ONCLICK WILL JUST WORK WITHOUT SUBTYRACT MAYBE???
        onClick={() => onClick("subtract")}
      >
        <MinusIcon />
      </Button>
      <p className="w-[40px]">{quantity}</p>
      <Button
        className="bg-transparent border-none hover:bg-transparent shadow-none text-black"
        onClick={() => onClick("add")}
      >
        <PlusIcon />
      </Button>
    </div>
  )
}
