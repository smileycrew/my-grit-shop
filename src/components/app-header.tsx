import Link from "next/link"

const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "Account",
    path: "/account",
  },
]

export default function AppHeader() {
  return (
    <header>
      <div className="flex">
        <div className="text-center w-full">
          <h1>Iron Forge Candles</h1>
        </div>

        <p>Cart</p>
      </div>
      <nav>
        <ul className="flex justify-around">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
