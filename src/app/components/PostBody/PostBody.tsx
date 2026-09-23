import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import type { ComponentProps } from 'react'

function PostImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null
  return (
    <Image
      src={src}
      alt={alt ?? ''}
      width={1200}
      height={800}
      className="mx-auto mb-7 h-auto w-full max-w-2xl border-3 border-ink"
    />
  )
}

const components = {
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="mb-4 mt-8 font-display text-xl font-extrabold uppercase" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => <p className="mb-7 leading-8" {...props} />,
  a: ({ href, children, ...props }: ComponentProps<'a'>) => (
    <a
      href={href}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-sun px-1 font-bold underline underline-offset-4"
    >
      {children}
    </a>
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="mb-7 border-l-3 border-ink bg-ice px-3 py-2 italic" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => <ul className="mb-7 list-disc space-y-2 pl-6" {...props} />,
  ol: (props: ComponentProps<'ol'>) => <ol className="mb-7 list-decimal space-y-2 pl-6" {...props} />,
  img: ({ src, alt }: { src?: string; alt?: string }) => <PostImage src={src} alt={alt} />,
}

export default function PostBody({ source }: { source: string }) {
  return (
    <MDXRemote source={source} components={components} options={{ mdxOptions: { format: 'md' } }} />
  )
}
