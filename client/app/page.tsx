import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen max-h-max bg-slate-200">
      <nav className="w-screen h-20 bg-emerald-100 border-b-2 border-emerald-800 flex items-center text-start ">
        <h2 className="text-orange-500 font-bold text-5xl ml-5">Extbeni</h2>
        <div className="flex justify-end gap-x-5 w-screen flex-wrap mr-5">
          <Link href="/login">
            <button className="w-36 h-12 bg-emerald-400 rounded-xl font-bold text-white border-2 border-black">
              Login
            </button>
          </Link>
          <Link href="/">
            <button className="w-36 h-12 bg-emerald-400 rounded-xl font-bold text-white border-2 border-black">
              Inicio
            </button>
          </Link>
          <Link href="/">
            <button className="w-36 h-12 bg-emerald-400 rounded-xl font-bold text-white border-2 border-black">
              Donate
            </button>
          </Link>
          <Link href="/">
            <button className="w-36 h-12 bg-emerald-400 rounded-xl font-bold text-white border-2 border-black">
              Apoiadores
            </button>
          </Link>
        </div>
      </nav>
    </main>
  );
}
