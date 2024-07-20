export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-semibold hover:text-[#0B3471] text-[#0B3471]/80 text-3xl text-center transition">
      {children}
    </h1>
  )
}
