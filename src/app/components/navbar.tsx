import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl">
          <Link href="/">Rocket Team</Link>
        </div>
        <div className="space-x-6">
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/about" className="hover:text-blue-500">About Us</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/team" className="hover:text-blue-500">Team</Link>
        </div>
      </div>
    </nav>
  )
}