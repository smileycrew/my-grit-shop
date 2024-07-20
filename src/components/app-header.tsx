import { routes } from "@/lib/data"
import H1 from "./h1"
import NavItem from "./nav-item"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import SectionBackground from "./section-background"
import Link from "next/link"

export default function AppHeader() {
  return (
    <header className="flex flex-col items-center py-[25px] relative space-y-3">
      <SectionBackground hexColor="FDFBF7" />
      <div className="grid grid-cols-3 w-full">
        {/* TODO REMOVE THE STYLING WHILE REUSING THE BUTTON AS CHILD */}
        <Button size="icon">
          {/* TODO THIS IS GOING TO BE THE POPUP MAYBE??? */}
          <MagnifyingGlassIcon />
        </Button>

        {/* TODO FIND A WAY TO REUSE THE NAVITEM HERE */}
        <Link href="/">
          <H1>Iron Forged Candles</H1>
        </Link>

        {/* TODO THIS IS GOING TO BE THE LINK TO REDIRECT TO CART MAYBE??? */}
        {/* <Button asChild size="icon">
          <p className="text-end">
            <BackpackIcon />
          </p>
        </Button> */}
        <p className="text-end">Cart</p>
      </div>
      <nav>
        <ul className="flex gap-10 justify-center">
          {routes.map((route) => (
            <NavItem key={route.path} route={route}>
              {route.label}
            </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  )
}
