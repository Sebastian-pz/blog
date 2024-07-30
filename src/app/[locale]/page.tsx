import "./page.css";

// Componentes
import PostsSection from "@/components/PostsSection/PostsSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeaderSection />
      <PostsSection />
    </div>
  );
}
