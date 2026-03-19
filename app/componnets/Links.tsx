"use client"

import Link from "next/link"

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Contact", path: "/contact" },
]

const Links = () => {
  return (
    <div>
      {links.map((list) => (
        <Link key={list.name} href={list.path}>
          {list.name}
        </Link>
      ))}
    </div>
  )
}

export default Links