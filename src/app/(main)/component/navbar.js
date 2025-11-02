'use client'

export default function Navbar(){
    const navs = [
        {
            "name": "Home",
            "id": "/#hero"
        },
        {
            "name": "Favorite",
            "id": "/#favorit"
        },
        {
            "name": "Spots",
            "id": "/#spot"
        },
        {
            "name": "Promo",
            "id": "/#promo"
        },
        {
            "name": "Search",
            "id": "/#search"
        },
    ]

    return(
        <div className={`duration-200 w-full h-fit top-3 fixed px-30 z-50`}>
            <div className="w-fit h-fit bg-gray-800/20 backdrop-blur-sm rounded-full border border-white flex flex-row self-center justify-self-center p-2 px-10">
                <div className="flex flex-row gap-5">
                    {navs.map((nav) => (
                        <a key={nav.name} href={nav.id} className="hover:border-b">
                            {nav.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}