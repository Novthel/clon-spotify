import Image from "next/image";
import Link from "next/link";
import { BsFillHouseDoorFill, BsSearch, BsCollectionFill, BsPlusSquareFill, BsSuitHeartFill, BsGlobe, BsXLg } from "react-icons/bs";

export default function Sidebar({ showMenu, setShowMenu }) {
  return (
    <div className={ `fixed bg-spotify-sidebar w-64 text-gray-300 h-full p-6 flex flex-col 
    justify-between ${ showMenu? 'left-0' : '-left-full' } md:left-0 transition-all duration-300 z-50` }>
      <div>
        <button className="absolute top-4 right-4 text-gray-300 hover:text-white md:hidden" onClick={()=>setShowMenu(false)}>
          <BsXLg className="text-2xl font-bold" />
        </button>
        <div className="mb-8">
        <Image src='https://zeevector.com/wp-content/uploads/Spotify-Black-and-White-Logo.png' alt="logo-spotify" 
          width={130} height={130} priority />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link href='/' className="flex gap-4 items-center text-gray-300 hover:text-white transition-colors text-sm font-medium">
                <BsFillHouseDoorFill className="text-2xl"/> Inicio
              </Link>
            </li>
            <li>
              <Link href='/' className="flex gap-4 items-center  text-gray-300 hover:text-white transition-colors text-sm font-medium">
                <BsSearch className="text-2xl"/> Buscar
              </Link>
            </li> 
            <li className='mb-6'>
              <Link href='/' className="flex gap-4 items-center  text-gray-300 hover:text-white transition-colors text-sm font-medium">
                <BsCollectionFill className="text-2xl"/> Tu biblioteca
              </Link>
            </li> 
            <li>
              <Link href='/' className="flex gap-4 items-center  text-gray-300 hover:text-white transition-colors text-sm font-medium">
                <BsPlusSquareFill className="text-2xl"/> Crear Lista
              </Link>
            </li>
            <li>
              <Link href='/' className="flex gap-4 items-center  text-gray-300 hover:text-white transition-colors text-sm font-medium">
                <BsSuitHeartFill className="text-2xl"/> Canciones que te gustan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className="flex flex-col gap-y-4 md:mb-20 ">
            <li className="mb-4">
              <Link href='/' className="flex gap-4 items-center  text-gray-300 hover:text-white transition-colors text-xs">
                Cookies
              </Link>
            </li>
            <li className="flex text-center">
              <Link href='/' className="flex gap-1 items-center  text-gray-300 hover:text-white 
              hover:scale-105 text-sm font-bold border px-3 py-1 rounded-full ">
              <BsGlobe/>  Español de España
              </Link>
            </li> 
        </ul>
      </div>
    </div>
  )
}
