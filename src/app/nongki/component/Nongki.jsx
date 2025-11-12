import React from 'react'

const Nongki = () => {
  return (
    <>
      <section className="w-full">
          <div className=" w-full flex flex-row gap-2 px-12 py-2 items-center text-center">
            {filter_chip.map((el, i) => 
              <Chip key={el.tipe} text={el.tipe} activeIndex={activeIndex} handleClick={handleClick} index={i} /> )}
          </div>
          {filter_chip.map((el, i) => 
            <DropdownMenu activeIndex={activeIndex} index={i} key={el.tipe} filter={el.filter} />   
          )}
        </section>
    </>
  )
}

export default Nongki