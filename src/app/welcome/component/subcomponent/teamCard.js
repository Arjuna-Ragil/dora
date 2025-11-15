'use client'

import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function TeamCard({ nama, shadow, role, desc, git, linked}){
    const [flip, setFlip] = useState(false)

    return(
        <div onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)} className="h-full w-full">
            <div className={`${flip ? "rotate-y-180" : ""} duration-300 h-full w-full bg-gray-300 rounded-2xl p-3`}>
                <div className={`${flip ? "hidden" : ""} h-full rounded-2xl relative z-10`}>
                    <Image src={shadow} alt="shadow" fill className="h-full w-full object-cover rounded-2xl absolute -z-10"/>
                    <div className="bg-linear-to-t from-white to-transparent to-50% flex flex-col justify-between h-full p-5">
                        <p className="bg-primary text-white p-2 px-5 rounded-full w-fit">{role}</p>
                        <h2 className="text-3xl font-medium">{nama}</h2>
                    </div>
                </div>
                <div className={`${flip ? "rotate-y-180" : "hidden"} h-full w-full flex flex-col justify-between bg-white rounded-2xl p-5`}>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl font-medium text-primary">{nama}</h2>
                        <p className="text-lg">{role}</p>
                        <p className="font-light">{desc}</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <a href={git} className="bg-gray-300 hover:bg-secondary duration-150 rounded-full p-2"><Github/></a>
                        <a href={linked} className="bg-gray-300 hover:bg-secondary duration-150 rounded-full p-2"><Linkedin/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}