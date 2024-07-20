// MAYBE MAKE THIS COMPONENT REUSABLE FOR THE OTHER SECTIONS
export default function SectionBackground({ hexColor }: { hexColor: string }) {
  return (
    // TODO THIS MAY END UP HURTING LATER BUT IT IS TAKING THE TOP OF THE PADDING
    <div
      className={`absolute bg-[#${hexColor}] border-b h-full top-0 w-screen -z-10`}
    ></div>
  )
}
