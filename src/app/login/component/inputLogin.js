'use client'

import { useLogin } from "../hook/useLogin"

export default function InputLogin(){
    const {showSignUp, setShowSignUp} = useLogin()

    if (!showSignUp) {
        return(
            <div className="h-full w-full flex flex-col items-center justify-center px-10 gap-10">
                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-5xl font-bold">Log In</h1>
                    <p className="text-xl">Yuk lanjut jelajahi UMKM lokal di sekitar Pintu Doraemon!</p>
                </div>
                <div className="flex flex-col w-full gap-3">
                    <input type="email" placeholder="Email Aktif" className="p-2 px-4 border rounded-2xl"/>
                    <input type="password" placeholder="Kata Sandi" className="p-2 px-4 border rounded-2xl"/>
                    <button className="flex self-start">Lupa Kata Sandi?</button>
                </div>
                <button className="bg-primary/70 hover:bg-primary text-white text-2xl w-full rounded-2xl p-2">Masuk Sekarang</button>
                <div className="flex flex-row gap-2">
                    <p>Belum punya akun?</p>
                    <p onClick={() => setShowSignUp(true)} className="border-b">Daftar di sini</p>
                </div>
            </div>
        )
    }

    if (showSignUp) {
        return(
            <div className="h-full w-full flex flex-col items-center justify-center px-10 gap-10">
                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-5xl font-bold">Create Your Account</h1>
                    <p className="text-xl">Temuin, dukung, dan bantu UMKM lokal di sekitar Pintu Doraemon biar makin dikenal!</p>
                </div>
                <div className="flex flex-col w-full gap-3">
                    <input type="text" placeholder="Nama Lengkap" className="p-2 px-4 border rounded-2xl"/>
                    <input type="email" placeholder="Email Aktif" className="p-2 px-4 border rounded-2xl"/>
                    <input type="tel" placeholder="Nomor HP (optional)" className="p-2 px-4 border rounded-2xl"/>
                    <input type="password" placeholder="Kata Sandi" className="p-2 px-4 border rounded-2xl"/>
                    <input type="password" placeholder="Konfirmasi Kata Sandi" className="p-2 px-4 border rounded-2xl"/>
                </div>
                <button className="bg-primary/70 hover:bg-primary text-white text-2xl w-full rounded-2xl p-2">Buat Akun</button>
                <div className="flex flex-row gap-2">
                    <p>Sudah punya akun?</p>
                    <p onClick={() => setShowSignUp(false)} className="border-b">Masuk di sini</p>
                </div>
            </div>
        )
    }
    
}