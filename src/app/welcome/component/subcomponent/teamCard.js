'use client'

import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function TeamCard({ nama, shadow, role, desc, git, linked}){
    const [flip, setFlip] = useState(false)

    return(
        <div onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)} className="h-full w-full">
            <div className={`${flip ? "rotate-y-180" : ""} duration-300 h-full w-full bg-gray-300 rounded-2xl p-3`}>
                <div className={`${flip ? "hidden" : ""} h-full w-full rounded-2xl relative`}>
                    <Image src={shadow} alt="shadow" fill/>
                    <div className="bg-linear-to-t from-white to-transparent to-30% flex flex-col items-center justify-between">
                        <p>{role}</p>
                        <h2>{nama}</h2>
                    </div>
                </div>
                <div className={`${flip ? "rotate-y-180" : "hidden"} h-full w-full bg-white rounded-2xl`}>
                    <h2>{nama}</h2>
                    <p>{role}</p>
                    <p>{desc}</p>
                    <div>
                        <a href={git}><Github/></a>
                        <a href={linked}><Linkedin/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}