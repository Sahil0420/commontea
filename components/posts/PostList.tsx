import PostCard from "./PostCard"

const mockPosts = [
  {
    id: "1",
    title: "Introducing Next.js 13: A Game-Changer for React Developers",
    content:
      "Next.js 13 brings revolutionary changes to the React ecosystem. Here are the key features:\n\n- **App Directory**: A new file-system based router with support for layouts, nested routing, and more.\n- **Server Components**: Render React components on the server for improved performance.\n- **Streaming**: Progressively render and stream updates to the client.\n- **Turbopack**: An incremental bundler offering significant speed improvements.\n\nWhat are your thoughts on these new features?",
    author: "nextjs_enthusiast",
    createdAt: "2 hours ago",
    voteScore: 128,
    commentCount: 37,
  },
  {
    id: "2",
    title: "The Rise of AI in Web Development: Threat or Opportunity?",
    content:
      "As AI continues to advance, its impact on web development is becoming increasingly apparent. Let's discuss:\n\n1. **Code Generation**: AI tools can now generate boilerplate code and even complex functions.\n2. **Design Assistance**: AI-powered design tools are revolutionizing UI/UX processes.\n3. **Automated Testing**: AI can create and run test cases more efficiently than ever before.\n4. **Personalization**: AI algorithms can tailor user experiences in real-time.\n\nAre these advancements a threat to developers' jobs, or do they present new opportunities for growth and innovation?",
    author: "ai_web_dev",
    createdAt: "5 hours ago",
    voteScore: 95,
    commentCount: 52,
  },
  {
    id: "3",
    title: "Mastering CSS Grid: Tips and Tricks",
    content:
      "CSS Grid has revolutionized web layouts. Here are some pro tips to level up your grid game:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n```\n\nThis creates a responsive grid where columns automatically adjust based on available space. What are your favorite CSS Grid techniques?",
    author: "css_wizard",
    createdAt: "1 day ago",
    voteScore: 210,
    commentCount: 28,
  },
]

export default function PostList() {
  return (
    <div>
      {mockPosts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}

