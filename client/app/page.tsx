import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="ml-56 overflow-x-hidden">
        <div className="w-[calc(100vw-14rem)] h-screen bg-[#4F5D75] flex flex-row justify-between items-center">
          <div className="w-2/4 relative left-[10%]">
            <img src="images/main.jpeg" className="rounded-sm" />
          </div>
          <div className="h-5/6 w-4/5 bg-[#BCD8B7] rounded-tl-md rounded-bl-md flex items-center">
            <div className="ml-52 w-1/2">
              <p className="text-2xl font-bold text-clip font-robotomono [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-[#2D3142]">
                O Apoio Missionário é uma cooperativa dedicada a arrecadar e distribuir roupas para pessoas necessitadas na comunidade de Esperança Nova. Seu objetivo é proporcionar agasalho e dignidade, não apenas durante o inverno, mas durante todo o ano. Além disso, a organização oferece programas de capacitação para ajudar os beneficiários a superar os desafios da pobreza e da exclusão social. A Casa do Agasalho é mais do que uma organização, é uma família unida pelo desejo de fazer o bem.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#4F5D75] m-auto w-[calc(100vw-14rem)] h-fit">
          <div className="w-3/4 m-auto flex flex-col gap-16 justify-center items-center">
            <h2 className="text-3xl text-center font-robotomono font-bold text-white">Esses lemas podem transmitir a mensagem de solidariedade, empatia e comprometimento da organização com sua missão de ajudar aqueles que mais precisam.</h2>
            <svg fill="#ffffff" height="81px" width="81px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> </g> </g> </g> </g></svg>
          </div>
        </div>
        <div className="w-[calc(100vw-14rem)] h-screen bg-[#4F5D75] flex flex-row justify-between items-center">

        </div>
      </main >
    </>
  );
}
