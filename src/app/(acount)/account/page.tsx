import PageTitle from "@/components/page-title"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <div className="py-5">
        <PageTitle>Account</PageTitle>
      </div>

      <div className="flex flex-col gap-3 h-[450px] items-center justify-center">
        <p>Logged in as...</p>
        <Button>Log out</Button>
      </div>
    </>
  )
}
