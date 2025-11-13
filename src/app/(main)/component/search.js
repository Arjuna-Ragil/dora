import { ArrowUpNarrowWide, ArrowUpWideNarrow, ChevronDown } from "lucide-react";
import UmkmCard from "../../../../component/UmkmCard";  
import rawData from '../../../data/data.json'; 

export default function Search(){ 
    const umkmData = rawData.umkm_data || [];

    return(
        <div className="min-h-screen h-full w-full flex flex-col gap-5 bg-white border-t-2 p-5 py-15 md:p-15 border-secondary animate-appear [animation-timeline:view()]" id="search">
            <div className="w-full md:grid grid-cols-2 flex flex-col gap-3 max-md:items-center justify-center border-b border-secondary p-3">
                <div className="w-full flex flex-col md:border-r border-secondary md:px-2 gap-3">
                    <h1 className="md:text-3xl text-xl font-medium max-md:text-center">Dora Menu</h1>
                    <input type="text" placeholder="Search for Doraemon UMKM" className="bg-neutral-100 w-full max-md:text-sm border border-gray-400 rounded-xl p-2"/>
                </div>
                <div className="w-full md:flex flex-row grid grid-cols-2 gap-3 md:items-end items-center justify-evenly md:text-base text-xs">
                    <button className="bg-primary/30 hover:bg-primary/50 p-2 lg:px-5 rounded-2xl flex flex-row gap-2 items-center justify-center">Rating <ArrowUpWideNarrow /></button>
                    <button className="bg-primary/30 hover:bg-primary/50 p-2 lg:px-5 rounded-2xl flex flex-row gap-2 items-center justify-center">Harga <ArrowUpNarrowWide /></button>
                    <button className="bg-primary/30 hover:bg-primary/50 p-2 lg:px-5 rounded-2xl flex flex-row gap-2 items-center justify-center">Kategori <ChevronDown /></button>
                </div>
            </div>
             
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {umkmData.map((toko) => (
                    <UmkmCard key={toko.umkm_id} toko={toko} />
                ))}
            </div>
        </div>
    )
}