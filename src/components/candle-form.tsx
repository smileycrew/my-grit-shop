import { TAction, TCandle } from "@/lib/types"
import { useForm } from "react-hook-form"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useCandleContext } from "@/lib/hooks"

type TCandleFormProps = {
  action: TAction
  chosenCandle?: TCandle | undefined
  onFormSubmit: () => void
}

export default function CandleForm({
  action,
  chosenCandle,
  onFormSubmit,
}: TCandleFormProps) {
  // TODO FIND A WAY TO HAVE ZOD INCLUDE DEFAULT DATA THIS IN THE FORM
  const { getValues, register } = useForm<TCandle>()
  const { handleAddNewCandle, handleEditCandle } = useCandleContext()

  const handleFormSubmit = (formData: TCandle) => {
    // TODO THIS NEEDS VALIDATION
    formData.price = +formData.price

    onFormSubmit()

    if (action === "add") {
      handleAddNewCandle(formData)
    }

    // TODO THIS UNDEFINED CHECK CAN BE BETTER WITH ZOD OR ZUSTAND
    if (action === "edit" && chosenCandle !== undefined) {
      formData.id = chosenCandle?.id

      handleEditCandle(formData)
    }
  }

  return (
    <form
      action={() => {
        const formData = getValues()

        handleFormSubmit(formData)
      }}
      className="space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name of candle</Label>
        <Input
          id="name"
          // FIX THE OPTIONAL VALUES
          defaultValue={chosenCandle?.name || ""}
          required
          {...register("name")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price of candle</Label>
        <Input
          id="price"
          // FIX THE OPTIONAL VALUES
          defaultValue={chosenCandle?.price || ""}
          required
          type="number"
          {...register("price")}
        />
      </div>

      <Button>Add to store</Button>
    </form>
  )
}
