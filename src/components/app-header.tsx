import H1 from "./h1"
import SectionBackground from "./section-background"
import Link from "next/link"
import SearchDialog from "./search-dialog"
import { BackpackIcon } from "@radix-ui/react-icons"
import Nav from "./nav"

export default function AppHeader() {
  return (
    <header className="flex flex-col py-[25px] space-y-3">
      {/* TODO FIX THIS BACKGROUND SECTION COMPONENT */}
      {/* <SectionBackground hexColor="FDFBF7" /> */}

      <div className="flex justify-between">
        <SearchDialog />

        <H1 className="text-center">
          <Link href="/">Iron Forged Candles</Link>
        </H1>

        <Link className="self-center" href="/cart">
          <BackpackIcon />
        </Link>
      </div>

      <Nav />
    </header>
  )
}
