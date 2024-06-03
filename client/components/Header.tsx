import Link from "next/link";

export const Header = () => {
  return (
    <>
      <nav className="w-56 h-screen bg-[#2D3142] border-r-4 border-[#EF8354] flex flex-col items-center justify-center fixed z-10">
        <div className="flex flex-col justify-center items-center gap-10 h-full">
          <Link href="/login">
            <p className="text-lg font-semibold hover:text-[#EF8354]">Sobre</p>
          </Link>
          <Link href="/">
            <p className="text-lg font-semibold hover:text-[#EF8354]">Lemas</p>
          </Link>
          <Link href="/">
            <p className="text-lg font-semibold hover:text-[#EF8354]">Doar</p>
          </Link>
        </div>
        <div className="flex items-center justify-end h-1/6">
          <Link href="/">
            <h2 className="text-[#FF4C00] font-bold text-3xl">Extbeni</h2>
          </Link>
        </div>
      </nav>
    </>
  )
}