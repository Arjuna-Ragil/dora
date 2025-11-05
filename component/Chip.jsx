import { RiArrowDropDownLine } from "react-icons/ri";

const Chip = ({text, activeIndex, handleClick, index}) => {
  return (
    <div 
      className={`flex flex-row gap-1 items-end rounded-md py-1 px-3
        border border-transparent text-sm 
        transition-all shadow-md cursor-pointer
        ${activeIndex === index? "bg-black text-white" : "bg-gray-200 text-black"}`
        }
      onClick={() => handleClick(index)}
        >
      {text}
      <RiArrowDropDownLine size={20} />
    </div>
  )
}

export default Chip