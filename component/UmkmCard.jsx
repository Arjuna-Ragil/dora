import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

export default function UmkmCard({ toko }) {
    const imageUrl = toko.image;
    const location = toko.lokasi_sederhana || "Lokasi tidak tersedia";
    const linkHref = `/toko/${toko.umkm_id}`;

    return (
        <div className="group w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"> 
            <div className="relative w-full h-48 overflow-hidden">
                <Image 
                    src={imageUrl} 
                    alt={`Foto Toko ${toko.nama_toko}`}
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                /> 
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
 
            <div className="p-5 space-y-4"> 
                <h2 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {toko.nama_toko}
                </h2>
                 
                <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-2">{location}</span>
                </div>
                 
                <Link href={linkHref} className="block">
                    <button className="w-full px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group/btn">
                        <span>Lihat Detail</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                </Link>
            </div>
        </div>
    );
}