import CommunityCard from "./CommunityCard"

const mockCommunities = [
  { id: "1", name: "Tech Enthusiasts", description: "A community for tech lovers" },
  { id: "2", name: "Book Club", description: "Discuss your favorite books" },
  { id: "3", name: "Fitness Fanatics", description: "Share workout tips and motivation" },
]

export default function CommunityList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {mockCommunities.map((community) => (
        <CommunityCard key={community.id} {...community} />
      ))}
    </div>
  )
}

