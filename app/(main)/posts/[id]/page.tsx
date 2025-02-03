import PostCard from "@/components/posts/PostCard"
import CommentCard from "@/components/comments/CommentCard"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const mockPost = {
  id: "1",
  title: "Introducing Next.js 13: A Game-Changer for React Developers",
  content:
    "Next.js 13 brings revolutionary changes to the React ecosystem. Here are the key features:\n\n- **App Directory**: A new file-system based router with support for layouts, nested routing, and more.\n- **Server Components**: Render React components on the server for improved performance.\n- **Streaming**: Progressively render and stream updates to the client.\n- **Turbopack**: An incremental bundler offering significant speed improvements.\n\nWhat are your thoughts on these new features?",
  author: "nextjs_enthusiast",
  createdAt: "2 hours ago",
  voteScore: 128,
  commentCount: 3,
}

const mockComments = [
  {
    id: "1",
    content: "I've been using the App Directory, and it's a game-changer! The nested layouts are so intuitive.",
    author: "react_dev",
    createdAt: "1 hour ago",
    voteScore: 15,
    depth: 0,
  },
  {
    id: "2",
    content:
      "Turbopack sounds promising, but I've heard it's still not ready for production. Has anyone here used it extensively?",
    author: "performance_geek",
    createdAt: "45 minutes ago",
    voteScore: 8,
    depth: 0,
  },
  {
    id: "3",
    content:
      "I've been testing it out, and while it's fast, there are still some compatibility issues with certain plugins. It's getting better with each update though!",
    author: "early_adopter",
    createdAt: "30 minutes ago",
    voteScore: 5,
    depth: 1,
  },
]

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-3xl mx-auto">
      <PostCard {...mockPost} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="mb-4">
          <Textarea placeholder="What are your thoughts?" className="mb-2" />
          <Button>Add Comment</Button>
        </div>
        {mockComments.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  )
}

