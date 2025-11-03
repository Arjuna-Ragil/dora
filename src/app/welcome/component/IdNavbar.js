'use client'

import { useRouter } from "next/navigation";

export default function IdNavbar(){
  const navs = [
    {
      "name": "Home",
      "id": "/welcome#hero"
    },
    {
      "name": "Features",
      "id": "/welcome#features"
    },
    {
      "name": "Demo",
      "id": "/welcome#demo"
    },
    {
      "name": "Our Team",
      "id": "/welcome#team"
    },
  ]

  const router = useRouter();

  return(
    <div className="w-full flex flex-row items-center justify-center fixed gap-5 p-3 bg-white/50 backdrop-blur-md z-50">
      {navs.map((nav) => (
          <a key={nav.name} href={nav.id} className="hover:border-b">
              {nav.name}
          </a>
      ))}
      <button onClick={() => router.push("/login")} className="bg-primary/50 hover:bg-primary duration-150 rounded-full p-1 text-white px-3">Get Started</button>
    </div>
  )
};