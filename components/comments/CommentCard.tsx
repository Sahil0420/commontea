import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowBigUp, ArrowBigDown, MessageSquare } from "lucide-react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"

interface CommentCardProps {
  id: string
  content: string
  author: string
  createdAt: string
  voteScore: number
  depth: number
}

export default function CommentCard({
  id,
  content,
  author,
  createdAt,
  voteScore: initialVoteScore,
  depth,
}: CommentCardProps) {
  const [voteScore, setVoteScore] = useState(initialVoteScore)

  const handleVote = (value: number) => {
    setVoteScore((prevScore) => prevScore + value)
  }

  return (
    <Card className={`mb-2 ${depth > 0 ? "ml-4" : ""}`}>
      <CardContent className="pt-4">
        <div className="flex items-start space-x-2">
          <div className="flex flex-col items-center space-y-1">
            <Button variant="ghost" size="sm" onClick={() => handleVote(1)}>
              <ArrowBigUp className={`h-4 w-4 ${voteScore > 0 ? "text-orange-500" : ""}`} />
            </Button>
            <span className="text-xs font-bold">{voteScore}</span>
            <Button variant="ghost" size="sm" onClick={() => handleVote(-1)}>
              <ArrowBigDown className={`h-4 w-4 ${voteScore < 0 ? "text-blue-500" : ""}`} />
            </Button>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-muted-foreground mb-1">
              {author} • {createdAt}
            </p>
            <div className="prose dark:prose-invert max-w-none text-sm">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm">
          <MessageSquare className="mr-2 h-3 w-3" />
          Reply
        </Button>
      </CardFooter>
    </Card>
  )
}

