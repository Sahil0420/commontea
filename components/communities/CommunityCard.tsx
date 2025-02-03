import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CommunityCardProps {
  id: string
  name: string
  description: string
}

export default function CommunityCard({ id, name, description }: CommunityCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={`/communities/${id}`} className="hover:underline">
            {name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

