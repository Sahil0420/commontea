import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search } from "lucide-react"
import PostList from "@/components/posts/PostList"

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
      <section className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Community Platform</h1>
        <Button asChild>
          <Link href="/submit">Create Post</Link>
        </Button>
      </section>

      <section>
        <Card>
          <CardContent className="p-2">
            <div className="flex space-x-2">
              <Input placeholder="Search posts..." className="flex-grow" />
              <Button>
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Tabs defaultValue="hot" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="hot">Hot</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="top">Top</TabsTrigger>
            <TabsTrigger value="rising">Rising</TabsTrigger>
          </TabsList>
          <TabsContent value="hot">
            <PostList />
          </TabsContent>
          <TabsContent value="new">
            <PostList />
          </TabsContent>
          <TabsContent value="top">
            <PostList />
          </TabsContent>
          <TabsContent value="rising">
            <PostList />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

