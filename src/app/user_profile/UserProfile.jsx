import Image from "next/image";
import TopNavbar from "../../../component/TopNavbar.jsx";
import bg_profile from "../../../assets/bg_profile.png"

export default function UserProfilePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Top Navbar */}
      <TopNavbar />

      {/*  Konten utama */}
      <div className="flex flex-1 mt-4">
        {/* Sidebar */}
        <aside className="w-56 bg-white p-6 flex flex-col justify-between rounded-r-2xl">
          <div className="space-y-4 text-gray-700">
            <button className="block w-full text-left hover:text-blue-600">Profile</button>
            <button className="block w-full text-left hover:text-blue-600">Theme</button>
          </div>
          <button className="text-left text-red-500 hover:underline">Log out</button>
        </aside>

        {/* Bagian kanan: Kartu profil */}
        <main className="flex-1 p-10">
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            {/* Banner */}
            <div className="relative">
              <Image
                src={bg_profile}
                alt="Banner"
                width={1200}
                height={300}
                className="w-full h-40 object-cover rounded-t-2xl"
              />

              {/* Foto profil */}
              <div className="absolute left-8 bottom-0 translate-y-1/2">
                <div className="w-24 h-24 rounded-md bg-gray-300 border-4 border-white shadow"></div>
              </div>
            </div>

            {/* Informasi pengguna */}
            <div className="p-6 mt-10 text-gray-800">
              <h2 className="font-semibold text-lg">Rachel Putri Sumarecon Bekasi</h2>
              <p className="text-sm mb-4">rachelputput@gmail.com</p>

              
              <div className="flex gap-4 mb-6 text-xs text-gray-600">
                <button className="hover:underline hover:text-blue-600 ">Change</button>
                <button className="hover:underline hover:text-blue-600 ">Delete</button>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="Rachel Putri Sumarecon Bekasi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-lg px-4 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="rachelputput@gmail.com"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
