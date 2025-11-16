'use client'

import { useRouter } from "next/navigation"

export default function Spot(){
    const router = useRouter()

    return(
        <div className="min-h-screen h-full w-full md:grid grid-cols-2 flex items-center justify-center p-15" id="spot">
            <div className="h-fit w-full flex flex-col items-center self-center p-3 gap-10 justify-center md:bg-gray-400/20 bg-gray-200/70 border backdrop-blur-md rounded-3xl col-start-2 animate-appear [animation-timeline:view()]">
                <h1 className="md:text-3xl text-xl font-medium text-center">"Nongkrong" Spots People Loves</h1>
                <div className="flex flex-col gap-3 text-center md:text-xl">
                    <p>Enak nih kalo kesini, bisa ngumpul bareng temen</p>
                    <p>Cari tahu kafe, warung, atau tempat makan yang sedang ramai dan paling banyak dibicarakan orang di sekitarmu.</p>
                </div>
                <button onClick={() => router.push("/nongki")} className="bg-primary/20 hover:bg-primary/50 duration-150 border p-2 px-5 rounded-2xl">Temukan Spot Terbaik</button>
            </div>
        </div>
    )
}