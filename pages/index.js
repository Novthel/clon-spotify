import Layout from '@/components/Layout'
import ListAlbum from '@/components/ListAlbum'

export default function Home() {
  return (
    <Layout>
      <div className="bg-spotify-background min-h-screen text-gray-300 md:ml-64 p-8 pt-20">
        <ListAlbum title='Enfoque' />
        <ListAlbum title='Playlists de Spotify ' />
      </div>
    
    </Layout>
  )
}
