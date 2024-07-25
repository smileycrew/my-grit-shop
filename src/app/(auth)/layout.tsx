export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-[400px] items-center justify-center">{children}</div>
  )
}
