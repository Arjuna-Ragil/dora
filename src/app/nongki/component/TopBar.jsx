import { Filter } from "lucide-react"
import SearchBar from "./SearchBar"
import Chip from "../../../../component/Chip"

const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <SearchBar />
      {/* <Filter size={24} /> */}
      

      {/* {Desktop} */}
      <div className="flex gap-2">
        <div className="hidden md:block p-3 rounded-xl bg-gray-300">
          Default
        </div>
        <div className="hidden md:block p-3 rounded-xl bg-gray-300">
          Termurah
        </div>
        <div className="hidden md:block p-3 rounded-xl bg-gray-300">
          Termahal
        </div>
      </div>

    </div>
  )
}

export default TopBar