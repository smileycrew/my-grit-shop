import { ArrowRightIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import SectionBackground from "./section-background"
import Link from "next/link"

export default function Newsletter() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 relative text-center text-white/80">
      <SectionBackground hexColor="7789A7" />

      <div className="space-y-10">
        <p className="font-medium text-5xl">Subscribe to our emails</p>
        <p>Some info about why they should sign up?</p>
      </div>

      <div className="border flex rounded-md w-[400px]">
        <Input
          className="border-none placeholder:text-white/80 shadow-none"
          placeholder="Email"
        />

        <Button className="bg-transparent hover:bg-transparent shadow-none">
          <ArrowRightIcon />
        </Button>
      </div>

      <Button asChild className="bg-purple-700 hover:bg-purple-800">
        <Link
          className="flex items-center gap-3"
          href="https://www.instagram.com/"
        >
          Follow on
          <span>
            <InstagramLogoIcon />
          </span>
        </Link>
      </Button>
    </div>
  )
}
