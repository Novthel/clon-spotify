import Link from "next/link";
import Card from "./Card";


export default function ListAlbum(props) {

    const { title } = props

  return (
    <div className="mb-8">
        <div className="flex justify-between text-center mb-6">
            <Link href='/' className="text-sm md:text-xl font-extrabold hover:underline">{ title }</Link>
            <Link href='/' className="text-xs font-extrabold hover:underline p-1 tracking-wide">Mostrar todos</Link>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    </div>
  )
}
