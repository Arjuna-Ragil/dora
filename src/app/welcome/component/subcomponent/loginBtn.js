'use client'

import { useRouter } from "next/navigation";

export default function LoginBtn({text, type}){
    const router = useRouter();

    if (type === "navbar") {
        return(
            <button onClick={() => router.push("/login")} className="bg-primary/50 hover:bg-primary duration-150 rounded-full p-1 text-white md:px-3 px-2 max-md:text-xs">{text}</button>
        )
    }
    
    if (type === "hero") {
        return(
            <button onClick={() => router.push("/login")} className="bg-white hover:bg-neutral-200 duration-150 text-primary rounded-full p-2 px-5">Jelajahi Sekarang</button>
        )
    }
}