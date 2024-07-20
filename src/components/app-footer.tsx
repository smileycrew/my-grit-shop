import SectionBackground from "./section-background"

export default function AppFooter() {
  return (
    <footer className="flex flex-col items-center py-10 relative">
      <SectionBackground hexColor="7789A7" />

      <small className="self-start text-white/80">
        Placeholder for the small text this has margin top auto
      </small>
    </footer>
  )
}
