import AsideComponent from '@/components/AsideComponent/AsideComponent'
import Posts from '@/components/Posts/Posts'

export default function PostsSection() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-[3fr_1fr] md:gap-12 md:px-6 md:py-16">
      <Posts />
      <AsideComponent />
    </div>
  )
}
