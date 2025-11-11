import { IoIosSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <div className="flex gap-4 items-center w-xl ">
      <input className="flex-1 h-8 p-4 bg-gray-200 rounded-md" placeholder="Cari"/>
      <IoIosSearch size={24} onCl/>
    </div>
  )
}

export default SearchBar