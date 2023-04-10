import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main className="bg-spotify-background min-h-screen">
        <h1>
          Hello world!
        </h1>
      </main>
    
    </Layout>
  )
}
