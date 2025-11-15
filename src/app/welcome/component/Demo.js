import React from "react";

export default function Demo(){
  return (
    <div className="lg:h-screen h-full w-full bg-white xl:p-20 2xl:p-30 sm:py-15 p-5 pt-15" id="demo">
      <div className="h-full w-full grid lg:grid-cols-2 items-center justify-center gap-10 lg:p-0 sm:p-10 px-3 py-4 animate-slideUp [animation-timeline:view()]"> 
        <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-medium text-primary">Lihat Gimana Mudahnya Jelajahi UMKM di <b className="text-secondary">Pintu Doraemon</b></h1>
            <div className="flex flex-col gap-3">
            <p>Cuma beberapa klik buat nemuin promo, tempat nongkrong, dan usaha lokal favoritmu. Nih, intip dulu sneak peek-nya biar makin kebayang!</p>
            <ul className="list-disc list-inside">
              <li>Jelajahi UMKM di sekitar Pintu Doraemon tanpa ribet</li>
              <li>Simpan toko favorit biar gak lupa tempat langganan</li>
              <li>Dapat informasi promo terbaru setiap hari</li>
              <li>Temuin spot nongkrong hidden gem yang belum banyak orang tahu</li>
            </ul>
          </div>
        </div>
        <iframe 
          className="aspect-video w-full rounded-2xl " 
          src="https://www.youtube.com/embed/0YiRmlDCCeg?si=sfbgqQMx0_JhcfIR" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        ></iframe> 
      </div> 
    </div>
  );
};