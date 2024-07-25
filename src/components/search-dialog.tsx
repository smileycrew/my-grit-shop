import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <MagnifyingGlassIcon />
      </DialogTrigger>

      <DialogContent>
        <DialogTitle></DialogTitle>

        <DialogDescription></DialogDescription>

        <div className="flex gap-3">
          <Input placeholder="Search our products" />

          <Button>Search</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
