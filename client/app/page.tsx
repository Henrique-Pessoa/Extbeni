import Link from "next/link";
import Carousel from "./components/carousel";

export default function Home() {
  let slides = [
    "https://s2-g1.glbimg.com/4pZAEYSLOksCRaKTSjdfF-1-YMQ=/0x0:1600x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/v/D/npzuN3SB64Izw2qWzZ7g/whatsapp-image-2021-06-29-at-16.01.28.jpeg",
    "https://app.grupoevve.com.br/cdn/img/0/0/crop/60/20210127_6011ea898cc82.jpg"
  ]
  return (
    <main className="w-screen h-screen max-h-max bg-slate-200">
      <nav className="w-screen h-20 bg-white border-b-4 border-emerald-800 flex items-center text-start">
        <Link href="/">
          <h2 className="text-orange-500 font-bold text-3xl ml-5">Extbeni</h2>
        </Link>
        <div className="flex justify-end gap-x-12 w-screen flex-wrap mr-5">
          <Link href="/login">
            <div className="flex flex-row gap-2 align-middle items-center justify-center">
              <img src="icons/user-svgrepo-com.png" className="w-10 h-10" />
              <p>Login</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-row gap-2 align-middle items-center justify-center">
              <img src="icons/donate-svgrepo-com.png" className="w-10 h-10" />
              <p>Doar!</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-row gap-2 align-middle items-center justify-center ">
              <img src="icons/community-group-leader-svgrepo-com.png" className="w-10 h-10" />
              <p>Apoiadores</p>
            </div>
          </Link>
        </div>
      </nav>
      <section>
        <div className="w-[50%] m-auto pt-11">
          <Carousel slides={slides} />
        </div>
      </section>
    </main>
  );
}
