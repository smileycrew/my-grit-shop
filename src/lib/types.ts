import { Url } from "next/dist/shared/lib/router/router"
import { TCandleForm } from "./validations"

// TODO VERIFY THAT URL IS THE CORRECT TYPE HERE INSTEAD OF STRING
export type TRoute = {
  label: String
  path: Url
}

export type TCandleEssentials = Omit<TCandleForm, "id">

export type TAction = "add" | "edit" | "delete"
