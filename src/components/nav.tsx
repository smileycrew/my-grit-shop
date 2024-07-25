import { routes } from "@/lib/data"
import NavItem from "./nav-item"

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-10 justify-center">
        {routes.map((route) => (
          <NavItem key={route.path} route={route} />
        ))}
      </ul>
    </nav>
  )
}
