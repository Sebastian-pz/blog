import PostsSection from '@/components/PostsSection/PostsSection'
import HeaderSection from '@/components/HeaderSection/HeaderSection'

export default function Home() {
  return (
    <div className="nb-page">
      <HeaderSection />
      <PostsSection />
    </div>
  )
}
