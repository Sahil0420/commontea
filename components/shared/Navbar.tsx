import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-64 border-r p-4">
      <ul className="space-y-2">
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
  )
}

