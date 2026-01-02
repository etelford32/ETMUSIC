import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LatestTracks from '@/components/LatestTracks'
import SoundDesign from '@/components/SoundDesign'
import ETU2175 from '@/components/ETU2175'
import ErosSeries from '@/components/ErosSeries'
import Contact from '@/components/Contact'
import AudioPlayer from '@/components/AudioPlayer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <LatestTracks />
      <SoundDesign />
      <ETU2175 />
      <ErosSeries />
      <Contact />
      <AudioPlayer />
    </main>
  )
}
