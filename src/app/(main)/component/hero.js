export default function Hero(){
    return(
        <div className="min-h-screen h-full w-full flex flex-col items-center justify-center md:gap-10 gap-5" id="hero">
            <div className="flex flex-col items-center justify-center text-center gap-2 p-2">
                <h1 className="md:text-5xl text-2xl font-bold text-primary">Selamat Datang, user</h1>
                <h2 className="md:text-3xl font-medium text-secondary">UMKM mana yang ingin Anda kunjungi kali ini?</h2>
            </div>
            <div className="md:grid grid-cols-2 flex flex-col gap-5 text-center">
                <a href="#favorit" className="bg-gray-200/70 hover:bg-red-300 duration-150 border border-black rounded-2xl p-2 px-5">Your Favorit</a>
                <a href="#spot" className="bg-gray-200/70 hover:bg-yellow-300 duration-150 border border-black rounded-2xl p-2 px-5">Spot Nongkrong</a>
                <a href="#promo" className="bg-gray-200/70 hover:bg-green-300 duration-150 border border-black rounded-2xl p-2 px-5">Promo of the Day</a>
                <a href="#search" className="bg-gray-200/70 hover:bg-blue-300 duration-150 border border-black rounded-2xl p-2 px-5">Search</a>
            </div>
            <p className="md:text-xl animate-pulse">Scroll to explore on your own</p>
        </div>
    )
}