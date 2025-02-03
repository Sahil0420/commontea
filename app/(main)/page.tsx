import { Button } from "@/components/ui/button"
import Link from "next/link"
import PostList from "@/components/posts/PostList"

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Community Platform</h1>
        <p className="text-xl mb-6">Connect, share, and grow with like-minded individuals</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/communities">Explore Communities</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/posts">Browse Posts</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
        <PostList />
      </section>
    </div>
  )
}

