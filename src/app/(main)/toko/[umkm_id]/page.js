import Link from 'next/link';

import data from '../../../../data/data.json'; 
import TopNavbar from '../../../../../component/TopNavbar';
import { Locate, Map, MapPin, Phone } from 'lucide-react';

const getUmkmData = (id) => { 
  return data.umkm_data.find((toko) => toko.umkm_id === id);
};

export async function generateStaticParams() { 
  return data.umkm_data.map((toko) => ({
    umkm_id: toko.umkm_id,
  }));
}

export default async function UmkmDetailPage({ params }) {
    
  const { umkm_id } = await params;
    
  const toko = getUmkmData(umkm_id); 
  
  if (!toko) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">404 - Toko Tidak Ditemukan</h1>
        <p className="text-xl mb-6">ID {umkm_id} tidak valid dalam sistem.</p>
        <Link href="/">
          <span className="text-blue-600 hover:underline">
            &larr; Kembali ke Beranda
          </span>
        </Link>
      </div>
    );
  }
    
  const formatPrice = (price) => {
      if (price.includes('K')) {
          return `Rp${price.replace('K', '.000')}`;
      }
      return price;   
  };

  return ( 
    <div className="min-h-screen bg-white flex flex-col font-inter">
        
      <TopNavbar />

      <div className="w-full max-w-7xl mx-auto p-6 md:p-8" style={{height: 'calc(100vh - 80px)'}}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
           
          <div className="md:col-span-4 space-y-4 flex flex-col h-full">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative flex-grow">
              <Link href="/" className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-md transition hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
                
              <div className="absolute inset-0 bg-map-pattern opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">📍</div>
              </div>
            </div>

            <a 
              href={`tel:${toko.kontak || ''}`}
              className="block w-full p-4 bg-blue-600 text-white text-center font-semibold text-base rounded-2xl hover:bg-blue-700 transition duration-150 shadow-sm flex-shrink-0"
            >
              Hubungi Usaha
            </a>
          </div>
 
          <div className="md:col-span-8 h-full overflow-y-scroll hide-scrollbar pr-2">
            <div className="space-y-5">
             
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full">
                {toko.kategori}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 cursor-pointer transition duration-150 hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.053a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.053a1 1 0 00-1.175 0l-2.817 2.053c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
 
            <div>
              <h1 className="text-4xl font-semibold text-[#034ED2] mb-3">{toko.nama_toko}</h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {toko.deskripsi_singkat}
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p className="flex items-start">
                  <span className="text-sm text-[#034ED2] mr-1 h-3"><MapPin /></span>
                  <span>{toko.lokasi_sederhana}</span>
                </p>
                {toko.kontak && (
                  <p className="flex items-start">
                    <span className="text-sm text-[#034ED2] mr-1"><Phone /></span>
                    <span>Buka setiap hari, {toko.kontak}</span>
                  </p>
                )}
              </div>
            </div>
 
            {/* JUJUR gua bingung awokaowkaokwaokowkoakwokawokaowkaowkoakwoakwa gmn yh bos
            {toko.nama_toko === 'Tukang Roti' && (
              <div className="bg-white border-2 border-blue-500 rounded-2xl p-4 shadow-sm">
                <h3 className="text-blue-600 font-bold text-base mb-2">Promo of the day</h3>
                <div className="bg-blue-50 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-900">Sumi-sumi | <span className="text-blue-600">Diskon 40%</span></span>
                    <span className="text-xs text-gray-500">Sampai 31 Oct</span>
                  </div>
                  <p className="text-xs text-gray-600">Makanan berbasis Cepat saji</p>
                  <p className="text-xs text-blue-600">+ Bebas kirim dari PHO Doraemon</p>
                </div>
              </div>
            )}  */}
 
            <div>
              <h2 className="text-xl font-semibold text-[#034ED2]0 mb-4">Menu:</h2>
              <div className="space-y-3">
                {toko.menu.map((item, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-600 font-base flex-shrink-0">{index + 1}.</span>
                      <div className="flex-grow">
                        <p className="text-gray-600 font-base">
                          <span>{item.nama}</span>
                          {item.harga && <span className="text-blue-600 font-semibold"> - {formatPrice(item.harga)}</span>}
                          {item.harga_m && item.harga_xl && (
                            <span className="text-blue-600 font-semibold"> - M: {formatPrice(item.harga_m)} / XL: {formatPrice(item.harga_xl)}</span>
                          )}
                        </p>
                        {item.deskripsi && (
                          <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.deskripsi}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            </div>

          </div>
        </div>
      </div>
        
    </div>
  );
}