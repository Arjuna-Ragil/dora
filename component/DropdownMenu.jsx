

const DropdownMenu = ({ activeIndex, index, filter }) => {
  return (
    <div className=
      {`${activeIndex === index? "flex flex-row" : "hidden" }
        border-2 border-black justify-center 
        max-w-5xl flex flex-row gap-2 my-4 mx-auto px-12 py-2 items-center text-center
      `}
    >
      {filter.map((el, i) =>
        <div className=" 
          rounded-md py-1 px-3
          border-2 border-black text-sm font-sans 
          cursor-pointer"
          key={i}
        >
          {el}
        </div>
      )}
    </div>  
  )
}

export default DropdownMenu