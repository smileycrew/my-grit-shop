import Image from "next/image"
import placeholderImg from "../../public/600x400.svg"

export default function HeroImage() {
  return (
    <Image
      alt="placeholder-image-url"
      className="h-[400px] rounded-xl shadow-sm w-[600px]"
      height={400}
      priority
      src={placeholderImg}
      width={600}
    />
  )
}
