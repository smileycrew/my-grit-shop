import { TAction, TCandleEssentials } from "@/lib/types"
import { useForm } from "react-hook-form"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useCandleContext } from "@/lib/hooks"
import { TCandleForm } from "@/lib/validations"

type TCandleFormProps = {
  action: TAction
  chosenCandle?: TCandleForm | undefined
  onFormSubmit: () => void
}

export default function CandleForm({
  action,
  chosenCandle,
  onFormSubmit,
}: TCandleFormProps) {
  // VERIFY THAT THIS DEFAULT DATA WORKS
  const { getValues, register } = useForm<TCandleEssentials>({
    defaultValues:
      action === "edit"
        ? {
            name: chosenCandle?.name,
            price: chosenCandle?.price,
          }
        : undefined,
  })
  const { handleAddNewCandle, handleEditCandle } = useCandleContext()

  const handleFormSubmit = (formData: TCandleEssentials) => {
    // TODO THIS NEEDS VALIDATION
    formData.price = +formData.price

    onFormSubmit()

    if (action === "add") {
      handleAddNewCandle(formData)
    }

    // TODO THIS UNDEFINED CHECK CAN BE BETTER WITH ZOD OR ZUSTAND
    if (action === "edit") {
      // TODO MAKE SURE THAT CHOSEN CANDLE WILL ALWAYS BE SELECTED IN HERE
      handleEditCandle(chosenCandle!.id, formData)
    }
  }

  return (
    <form
      action={async () => {
        const formData = getValues()

        handleFormSubmit(formData)
      }}
      className="space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name of candle</Label>
        <Input id="name" required {...register("name")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price of candle</Label>
        <Input id="price" required type="decimal" {...register("price")} />
      </div>

      <Button>{action === "add" ? "Add to store" : "Update item"}</Button>
    </form>
  )
}
