'use client'

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2 } from "lucide-react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"

interface PostCardProps {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  voteScore: number
  commentCount: number
}

export default function PostCard({
  id,
  title,
  content,
  author,
  createdAt,
  voteScore: initialVoteScore,
  commentCount,
}: PostCardProps) {
  const [voteScore, setVoteScore] = useState(initialVoteScore)

  const handleVote = (value: number) => {
    setVoteScore((prevScore) => prevScore + value)
  }

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-start space-x-4 pb-2">
        <div className="flex flex-col items-center space-y-1">
          <Button variant="ghost" size="sm" onClick={() => handleVote(1)}>
            <ArrowBigUp className={`h-5 w-5 ${voteScore > 0 ? "text-orange-500" : ""}`} />
          </Button>
          <span className="text-sm font-bold">{voteScore}</span>
          <Button variant="ghost" size="sm" onClick={() => handleVote(-1)}>
            <ArrowBigDown className={`h-5 w-5 ${voteScore < 0 ? "text-blue-500" : ""}`} />
          </Button>
        </div>
        <div className="flex-grow">
          <Link href={`/posts/${id}`} className="text-lg font-semibold hover:underline">
            {title}
          </Link>
          <p className="text-sm text-muted-foreground">
            Posted by {author} • {createdAt}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          {commentCount} Comments
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

