import Link from "next/link";
import { AiOutlineMore, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";


export default function Header({ setShowMenu }) {
  return (
    <div className="fixed w-full left-0 top-0 md:ml-64 md:w-[calc(100%-256px)] bg-spotify-barra text-gray-300 
    flex justify-between py-3 px-6 z-40 ">
      <button onClick={ ()=> setShowMenu(true)} className="md:hidden">
        <AiOutlineMore className="text-2xl p-2 box-content hover:cursor-pointer" />
      </button>
      <div className=" hidden md:flex items-center gap-4 ml-2 ">
        <button className="text-2xl bg-black rounded-full p-1">
          <AiOutlineLeft />
        </button>
        <button className="text-2xl bg-black rounded-full p-1">
          <AiOutlineRight />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <Link href='/' className="hover:text-white text-xs md:text-base font-semibold transition-colors">
            Registrarte
        </Link>
        <Link href='/' className="bg-white px-6 py-2 text-xs md:text-base font-semibold rounded-full box-content text-black 
        hover:scale-105 transition-transform ">
            Iniciar sesion
        </Link>
      </div>
    </div>
  )
}
