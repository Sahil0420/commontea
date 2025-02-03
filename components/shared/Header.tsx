import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Community Platform
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/communities" className="hover:underline">
                Communities
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:underline">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

