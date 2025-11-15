"use state"

import TopNavbar from "../../../component/TopNavbar";
import PromoSection from "./component/PromoSection"
import data from "../../data/data.json"

const page = () => {
  // const promoItems = Array(6).fill({
  //   title: "Sumi-sumi | Diskon 40%",
  //   desc: "Makanan berat cepat saji",
  //   loc: "Belok kanan dari Pintu Doraemon",
  //   until: "Sampai 31 Okt",
  // });

  const promoItems = data.umkm_data

  return (
    <>
      <TopNavbar />
      <div className="min-h-screen w-full bg-white text-gray-900 p-6">
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold mb-3">Promo of the Day</h1>
          <p className="text-sm text-gray-500 mb-6 max-w-xl mx-auto">
            Setiap hari selalu ada promo baru dari UMKM sekitar Pintu Doraemon. Siapa tahu, tempat langganan kamu lagi kasih diskon hari ini!
          </p>
        </div>

        <PromoSection promoItems={promoItems} />
      </div>
    </>
  )
}

export default page