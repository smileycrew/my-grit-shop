import { Url } from "next/dist/shared/lib/router/router"

// TODO VERIFY THAT URL IS THE CORRECT TYPE HERE INSTEAD OF STRING
export type TRoute = {
  label: String
  path: Url
}

export type TCandle = {
  id: number
  name: string
  price: number
}

export type TAction = "add" | "edit" | "delete"
