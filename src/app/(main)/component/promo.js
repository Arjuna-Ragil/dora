export default function Promo(){
    return(
        <div className="min-h-screen h-full w-full md:grid grid-cols-2 flex items-center justify-center p-15" id="promo">
            <div className="h-fit w-full flex flex-col self-center p-3 gap-10 items-center justify-center md:bg-gray-400/20 bg-gray-200/70 border backdrop-blur-md rounded-3xl animate-appear [animation-timeline:view()]">
                <h1 className="md:text-3xl text-xl font-medium text-center">Special Promo</h1>
                <div className="flex flex-col gap-3 text-center md:text-xl">
                    <p>Dana kalian menipis? aman aja, ada banyak diskon kok</p>
                    <p>Jangan lewatkan diskon, paket bundling, atau penawaran terbatas yang sedang berlangsung dari UMKM favoritmu.</p>
                </div>
                <button className="bg-primary/20 hover:bg-primary/50 duration-150 border p-2 px-5 rounded-2xl">Check Out All Promo</button>
            </div>
        </div>
    )
}