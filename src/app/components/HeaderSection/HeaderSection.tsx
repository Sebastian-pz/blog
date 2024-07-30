export default function HeaderSection() {
  return (
    <header className="bg-muted py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Blog
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explore our collection of thought-provoking articles and insights.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
