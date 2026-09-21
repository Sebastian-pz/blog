import AsideComponent from '@/components/AsideComponent/AsideComponent'
import Posts from '@/components/Posts/Posts'

export default function PostsSection() {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-[3fr_1fr] xl:gap-10">
      <Posts />
      <AsideComponent />
    </div>
  )
}
