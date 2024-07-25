"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import CandleForm from "./candle-form"
import { TAction } from "@/lib/types"
import { DialogDescription } from "@radix-ui/react-dialog"
import { TCandleForm } from "@/lib/validations"

type TCandleButtonProps = {
  action: TAction
  // TODO FIND OUT IF MAKING THIS OPTIONAL IS THE BEST WAY
  chosenCandle?: TCandleForm
  onClick?: () => void
}

export default function CandleButton({
  action,
  chosenCandle,
  onClick,
}: TCandleButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  if (action === "delete") {
    return (
      <Button onClick={onClick} variant="destructive">
        <TrashIcon />
      </Button>
    )
  }

  return (
    <Dialog onOpenChange={setIsFormOpen} open={isFormOpen}>
      <DialogTrigger asChild>
        <Button>{action === "add" ? <PlusIcon /> : <Pencil1Icon />}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{action === "add" ? "Add" : "Edit"} candle</DialogTitle>
        </DialogHeader>

        {/* TODO FIND A WAY TO REMOVE THIS */}
        <DialogDescription></DialogDescription>

        <CandleForm
          action={action}
          chosenCandle={chosenCandle}
          onFormSubmit={() => setIsFormOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
