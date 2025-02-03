import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

const mockCommunities = [
  { id: "1", name: "Tech Enthusiasts" },
  { id: "2", name: "Book Club" },
  { id: "3", name: "Fitness Fanatics" },
  { id: "4", name: "Foodies Unite" },
  { id: "5", name: "Travel Bugs" },
]

export default function Sidebar() {
  return (
    <aside className="w-64 border-r p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Communities</CardTitle>
        </CardHeader>
        <CardContent>
          <nav>
            <ul className="space-y-1">
              {mockCommunities.map((community) => (
                <li key={community.id}>
                  <Link href={`/communities/${community.id}`} className="text-sm hover:underline">
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="w-full mt-4" variant="outline">
            <PlusCircle className="mr-2 h-4 w-4" /> Join New Community
          </Button>
        </CardContent>
      </Card>
    </aside>
  )
}

