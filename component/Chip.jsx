import { RiArrowDropDownLine } from "react-icons/ri";

const Chip = ({text, activeIndex, handleClick, index}) => {
  return (
    <div 
      className={`flex w-42 gap-1 justify-center items-center rounded-md py-1 px-3 m-2
        border border-transparent text-sm 
        transition-all shadow-md cursor-pointer
        ${activeIndex === index? "bg-gray-200 text-black" : "bg-transparent text-white"}`
        }
      onClick={() => handleClick(index)}
        >
      <span className="bg-red-600 rounded-full w-4 h-4"></span>
      {text}
    </div>
  )
}

export default Chip