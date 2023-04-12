

export default function Footer() {
  return (
    <footer className="hidden md:flex px-4 py-2 z-50 w-full fixed left-0 bottom-0 bg-gradient-to-r from-fuchsia-700 via-purple-400 to-cyan-600 justify-between">
        <section>
            <p className="text-white text-sm">
                MUESTRA DE SPOTIFY
            </p>
            <p className="text-white text-sm">
                Registrate para disfrutar de canciones y podcasts sin limites, con anuncion ocasionales.
                No hace falta tarjeta de credito.
            </p>
        </section>
        <button className="text-black text-base font-bold bg-white rounded-full px-8 py-3 hover:scale-105">
            Registrarte gratis
        </button>
    </footer>
  )
}
