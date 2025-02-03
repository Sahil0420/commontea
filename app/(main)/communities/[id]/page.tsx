import { Button } from "@/components/ui/button"

export default function CommunityPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the community data based on the ID
  const communityName = `Community ${params.id}`

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">{communityName}</h1>
      <p className="mb-4">
        This is the page for {communityName}. Here you can view and interact with community content.
      </p>
      <Button>Join Community</Button>
    </div>
  )
}

