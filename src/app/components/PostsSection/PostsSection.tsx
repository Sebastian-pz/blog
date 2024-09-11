import AsideComponent from '@/components/AsideComponent/AsideComponent'
import Posts from '@/components/Posts/Posts'

export default function PostsSection() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 xl:grid-cols-[3fr_1fr] xl:gap-12 xl:px-6 xl:py-16">
      <Posts />
      <AsideComponent />
    </div>
  )
}
