import Link from 'next/link';
import Image from 'next/image';

const PRIMARY_COLOR = '#034ED2'; 

const AVATAR_PLACEHOLDER_COLOR = '#4a90e2'; 

export default function UmkmListItem({ toko }) {
    const linkHref = `/${toko.umkm_id}`;
    const initials = toko.nama_toko.slice(0, 1).toUpperCase();
    const shortDesc = toko.deskripsi_singkat || "Tidak ada deskripsi singkat.";

    return (
        <Link 
            href={linkHref} 
            className="block w-full group" 
        >
            <div 
                className={`flex items-center gap-4 p-4 md:p-5 bg-white rounded-xl 
                            border border-gray-200 shadow-sm transition-all duration-300 
                            // Hover: Angkat sedikit (translate-y-1), shadow lebih besar, border berubah warna
                            hover:shadow-lg hover:-translate-y-1 hover:border-blue-500
                            cursor-pointer`}
            >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-100">
                    {toko.image ? (
                        <Image 
                            src={toko.image} 
                            alt={`Logo ${toko.nama_toko}`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div 
                            className={`w-full h-full flex items-center justify-center text-lg md:text-xl font-bold text-white`}
                            style={{ backgroundColor: AVATAR_PLACEHOLDER_COLOR }} 
                        >
                            {initials}
                        </div>
                    )}
                </div>

                <div className="flex-grow min-w-0">
                    <p 
                        className={`text-base md:text-lg font-bold text-gray-800 line-clamp-1 
                                    group-hover:text-blue-600 transition-colors duration-200`}
                    >
                        {toko.nama_toko}
                    </p>
                    <p className="text-sm md:text-base text-gray-500 line-clamp-1">
                        {shortDesc}
                    </p>
                </div>
                
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200 ml-2 flex-shrink-0 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>

            </div>
        </Link>
    );
}