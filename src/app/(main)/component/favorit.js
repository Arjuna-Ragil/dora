'use client'

import { useRouter } from "next/navigation";


export default function Favorit(){
    const router = useRouter();

    return(
        <div className="min-h-screen h-full w-full md:grid grid-cols-2 flex items-center justify-center p-15" id="favorit">
            <div className="h-fit w-full flex flex-col self-center p-3 gap-10 items-center justify-center md:bg-gray-400/20 bg-gray-200/70 border backdrop-blur-md rounded-3xl">
                <h1 className="md:text-3xl text-xl font-medium text-center">Your Favorite UMKM</h1>
                <div className="flex flex-col gap-3 text-center md:text-xl">
                    <p>Kamu ingin makan makanan enak kemaren yaa??</p>
                    <p>Lihat daftar UMKM dan menu yang sudah kamu tandai sebagai favorit.</p>
                </div>
                <button onClick={() => router.push("/favorit")} className="bg-primary/20 hover:bg-primary/50 duration-150 border p-2 px-5 rounded-2xl">To Favorite</button>
            </div>
        </div>
    )
}