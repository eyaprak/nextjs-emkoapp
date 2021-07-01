import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
               <Link href="/"><a><Image src="/emko-logo.png" width={150} height={80} /></a></Link>
            </div>
            <Link href="/"><a>Home </a></Link>
            <Link href="/about"><a>About </a></Link>
            <Link href="/emko"><a>Emko Listing </a></Link>
        </nav>
    )
}
