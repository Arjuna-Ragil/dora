'use client';

import { useState, useMemo, useCallback } from 'react';
import { ArrowDown, ArrowUp, ChevronDown, SearchIcon, X } from 'lucide-react';  
import UmkmCard from "../../../../component/UmkmCard";
import rawData from '../../../data/data.json'; 

const PRIMARY_COLOR = '#034ED2';

const formatPrice = (price) => {
    if (typeof price === 'number') {
        const valueInThousands = price * 1000;
        return `Rp${valueInThousands.toLocaleString('id-ID', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })}`;
    }
    return price;
};

const uniqueCategories = [
    ...new Set(rawData.umkm_data.map(toko => toko.kategori.split(' | ')[0]))
];

export default function Search() { 
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState(null); 
    const [filterCategory, setFilterCategory] = useState(null);
    const umkmData = rawData.umkm_data || [];

    const filteredAndSortedData = useMemo(() => {
        let data = umkmData;

        if (filterCategory) {
            data = data.filter(toko => toko.kategori.includes(filterCategory));
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            data = data.filter(toko => 
                toko.nama_toko.toLowerCase().includes(query) ||
                toko.deskripsi_singkat.toLowerCase().includes(query) ||
                toko.kategori.toLowerCase().includes(query) ||
                toko.menu.some(item => item.nama.toLowerCase().includes(query))
            );
        }

        if (sortBy) {
            data = [...data].sort((a, b) => {
                const getMinPrice = (toko) => toko.menu
                    .map(item => typeof item.harga === 'number' ? item.harga : item.harga_m || Infinity)
                    .reduce((min, current) => Math.min(min, current), Infinity);

                const priceA = getMinPrice(a);
                const priceB = getMinPrice(b);

                if (priceA === Infinity && priceB === Infinity) return 0;
                if (priceA === Infinity) return sortBy === 'harga_asc' ? 1 : -1;
                if (priceB === Infinity) return sortBy === 'harga_asc' ? -1 : 1;

                return sortBy === 'harga_asc' ? priceA - priceB : priceB - priceA;
            });
        }
        
        return data;
    }, [searchQuery, sortBy, filterCategory, umkmData]);

    const handleSortChange = useCallback(() => {
        setSortBy(prevSortBy => {
            if (prevSortBy === 'harga_asc') return 'harga_desc';
            if (prevSortBy === 'harga_desc') return null; 
            return 'harga_asc'; 
        });
    }, []);

    const getSortIcon = () => {
        if (sortBy === 'harga_asc') return <ArrowUp className="h-4 w-4" />;
        if (sortBy === 'harga_desc') return <ArrowDown className="h-4 w-4" />;
        return <ArrowDown className="h-4 w-4 opacity-50" />;
    };

    const isFilterActive = searchQuery || sortBy || filterCategory;

    return(
        <div 
            className="relative min-h-screen h-full w-full flex flex-col bg-white z-10" 
            id="search"
        >
            <div className="sticky top-0 bg-white z-20 shadow-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    
                    <h1 className="text-3xl sm:text-4xl font-semibold text-[#034ED2] mb-4">
                        Dora Menu
                    </h1>
                    
                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                        
                        <div className="relative flex-1 w-full">
                            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Cari toko, menu, atau kategori..." 
                                className={`w-full bg-gray-50 text-base border border-gray-300 rounded-lg pl-12 pr-4 py-2.5 
                                           focus:ring-[#034ED2] focus:border-[#034ED2] transition duration-150`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex flex-wrap gap-2 sm:gap-3 items-center w-full sm:w-auto">
                            
                            <button 
                                className={`flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm sm:text-base border transition-all duration-200 ${
                                    sortBy ? `bg-[#034ED2] text-white border-[#034ED2] hover:bg-[#033EAA]` : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                                }`}
                                onClick={handleSortChange}
                            >
                                <span>Harga</span>
                                {getSortIcon()}
                            </button>
                            
                            <div className="relative flex-1 sm:flex-none sm:min-w-[150px]">
                                <select
                                    value={filterCategory || ''}
                                    onChange={(e) => setFilterCategory(e.target.value || null)}
                                    className={`w-full appearance-none px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm sm:text-base border cursor-pointer transition-all duration-200 pr-8 ${
                                        filterCategory ? `bg-[#034ED2] text-white border-[#034ED2] hover:bg-[#033EAA]` : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                                    } focus:ring-[#034ED2] focus:outline-none`}
                                >
                                    <option value="">Kategori</option>
                                    {uniqueCategories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className={`absolute right-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none ${
                                    filterCategory ? 'text-white' : 'text-gray-500'
                                }`} />
                            </div>

                            {isFilterActive && (
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSortBy(null);
                                        setFilterCategory(null);
                                    }}
                                    className="p-2 bg-white text-gray-500 border border-gray-300 rounded-lg hover:bg-red-50 hover:text-red-600 transition duration-150"
                                    title="Reset Semua Filter"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            )}
                        </div>
                    </div>
                    
                    {isFilterActive && (
                        <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm pt-3 border-t border-gray-100">
                            <span className="text-gray-500">Filter Aktif:</span>
                            {searchQuery && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center gap-1">
                                    Pencarian: {searchQuery}
                                </span>
                            )}
                            {filterCategory && (
                                <span className={`px-3 py-1 bg-[${PRIMARY_COLOR}15] text-[#034ED2] rounded-full flex items-center gap-1`}>
                                    Kategori: {filterCategory}
                                </span>
                            )}
                            {sortBy && (
                                <span className={`px-3 py-1 bg-[${PRIMARY_COLOR}15] text-[#034ED2] rounded-full flex items-center gap-1`}>
                                    Urutan Harga: {sortBy === 'harga_asc' ? 'Termurah' : 'Termahal'}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
             
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex flex-col">
                
                <div className="mb-4 text-sm text-gray-600">
                    Menampilkan <span className="font-semibold text-gray-900">{filteredAndSortedData.length}</span> hasil
                </div>

                {filteredAndSortedData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {filteredAndSortedData.map((toko) => (
                            <UmkmCard key={toko.umkm_id} toko={toko} formatPrice={formatPrice} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
                        <div className="text-6xl mb-4 text-gray-300"><SearchIcon /></div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                            Tidak ada hasil ditemukan
                        </h2>
                        <p className="text-gray-500 mb-6 max-w-md">
                            Coba ubah kata kunci pencarian, hapus filter, atau lihat semua kategori.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSortBy(null);
                                setFilterCategory(null);
                            }}
                            className={`px-6 py-3 bg-[#034ED2] text-white rounded-lg font-semibold hover:bg-[#033EAA] transition-all duration-200 shadow-md`}
                        >
                            Reset Semua Filter
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}