import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <MagnifyingGlassIcon />
      </DialogTrigger>

      <DialogContent>
        <p>Enter a product name</p>

        <div className="flex gap-3">
          <Input />

          <Button>Search</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
