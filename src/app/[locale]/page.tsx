import './page.css'

// Componentes
import PostsSection from '@/components/PostsSection/PostsSection'
import HeaderSection from '@/components/HeaderSection/HeaderSection'

export default function Home() {
  return (
    <div className="bg-bg-color text-foreground max-w-[1200px] m-auto">
      <HeaderSection />
      <PostsSection />
    </div>
  )
}
