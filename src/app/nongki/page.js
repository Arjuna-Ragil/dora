"use client";

import { useState, useMemo, useCallback } from "react";

import rawData from "../../data/data.json";
import Card from "./component/Card";

import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  SearchIcon,
  X,
} from "lucide-react";
import HeroNongki from "./component/HeroNongki";
import TopNavbar from "../../../component/TopNavbar";
import FactNongki from "./component/FactNongki";
import FeedbackMahasiswa from "./component/FeedbackMahasiswa";

const PRIMARY_COLOR = "#034ED2";

const uniqueCategories = [
  ...new Set(rawData.umkm_data.map((toko) => toko.kategori.split(" | ")[0])),
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);
  const umkmData = rawData.umkm_data || [];

  const filteredAndSortedData = useMemo(() => {
    let data = umkmData;

    if (filterCategory) {
      data = data.filter((toko) => toko.kategori.includes(filterCategory));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      data = data.filter(
        (toko) =>
          toko.nama_toko.toLowerCase().includes(query) ||
          toko.deskripsi_singkat.toLowerCase().includes(query) ||
          toko.kategori.toLowerCase().includes(query) ||
          toko.menu.some((item) =>
            item.nama.toLowerCase().includes(query)
          )
      );
    }

    if (sortBy) {
      data = [...data].sort((a, b) => {
        const getMinPrice = (toko) =>
          toko.menu
            .map((item) =>
              typeof item.harga === "number"
                ? item.harga
                : item.harga_m || Infinity
            )
            .reduce((min, current) => Math.min(min, current), Infinity);

        const priceA = getMinPrice(a);
        const priceB = getMinPrice(b);

        if (priceA === Infinity && priceB === Infinity) return 0;
        if (priceA === Infinity)
          return sortBy === "harga_asc" ? 1 : -1;
        if (priceB === Infinity)
          return sortBy === "harga_asc" ? -1 : 1;

        return sortBy === "harga_asc"
          ? priceA - priceB
          : priceB - priceA;
      });
    }

    return data;
  }, [searchQuery, sortBy, filterCategory, umkmData]);

  const handleSortChange = useCallback(() => {
    setSortBy((prev) => {
      if (prev === "harga_asc") return "harga_desc";
      if (prev === "harga_desc") return null;
      return "harga_asc";
    });
  }, []);

  const getSortIcon = () => {
    if (sortBy === "harga_asc")
      return <ArrowUp className="h-4 w-4" />;
    if (sortBy === "harga_desc")
      return <ArrowDown className="h-4 w-4" />;
    return <ArrowDown className="h-4 w-4 opacity-50" />;
  };

  const isFilterActive = searchQuery || sortBy || filterCategory;

  return (
    <>
        <TopNavbar />
        <HeroNongki />
        <FactNongki />
        <div
            className="relative min-h-screen w-full flex flex-col bg-white"
            id="search"
            >

            {/* TOP BAR */}
            <div className="sticky top-0 bg-white z-20 shadow-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-4">
                {/* SEARCH BAR + FILTER */}
                <div id="search-nongki" className="flex flex-col sm:flex-row gap-3 items-center">
                    <div className="relative flex-1">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Cari toko, menu, atau kategori..."
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-12 pr-4 py-2.5 text-base focus:ring-[#034ED2] focus:border-[#034ED2]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    </div>

                    <button
                    className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-sm border transition-all ${
                        sortBy
                        ? "bg-[#034ED2] text-white border-[#034ED2]"
                        : "bg-white text-gray-600 border-gray-300"
                    }`}
                    onClick={handleSortChange}
                    >
                    Harga {getSortIcon()}
                    </button>

                    <div className="relative">
                    <select
                        value={filterCategory || ""}
                        onChange={(e) =>
                        setFilterCategory(e.target.value || null)
                        }
                        className={`w-full appearance-none px-4 py-2 rounded-lg font-semibold text-sm border pr-8 ${
                        filterCategory
                            ? "bg-[#034ED2] text-white border-[#034ED2]"
                            : "bg-white text-gray-600 border-gray-300"
                        }`}
                    >
                        <option value="">Kategori</option>
                        {uniqueCategories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-500" />
                    </div>

                    {isFilterActive && (
                    <button
                        onClick={() => {
                        setSearchQuery("");
                        setSortBy(null);
                        setFilterCategory(null);
                        }}
                        className="p-2 bg-white text-gray-500 border border-gray-300 rounded-lg hover:bg-red-50 hover:text-red-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    )}
                </div>
                </div>
            </div>

            {/* RESULT */}
            <div className="max-w-7xl mx-auto px-4 py-6 w-full flex flex-col">
                <div className="mb-4 text-sm text-gray-600">
                Menampilkan{" "}
                <span className="font-semibold text-gray-900">
                    {filteredAndSortedData.length}
                </span>{" "}
                hasil
                </div>

                {filteredAndSortedData.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredAndSortedData.map((toko) => (
                      <Card key={toko.umkm_id} data={toko} />
                    ))}
                </div>
                ) : (
                <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                    <SearchIcon className="text-gray-300 w-16 h-16 mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Tidak ada hasil ditemukan
                    </h2>
                    <p className="text-gray-500 mb-6">
                    Coba ubah kata kunci atau reset filter.
                    </p>
                    <button
                    onClick={() => {
                        setSearchQuery("");
                        setSortBy(null);
                        setFilterCategory(null);
                    }}
                    className="px-6 py-3 bg-[#034ED2] text-white rounded-lg font-semibold hover:bg-[#033EAA]"
                    >
                    Reset Semua Filter
                    </button>
                </div>
                )}
            </div>
        </div>
    </>
  );
};

export default Page;
