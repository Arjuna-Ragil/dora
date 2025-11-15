import Image from 'next/image'
import React from 'react'

export default function Footer(){
  return (
    <div className='w-full flex flex-col md:pt-10 px-0 pt-10 pb-2 rounded-2xl items-center justify-center md:gap-15 gap-8'>
        <div className='w-full grid grid-cols-3 lg:px-15 px-5 sm:px-9 md:px-12 items-center justify-between max-md:gap-5'>
            <div className='w-full flex flex-col items-start gap-3 col-span-2'>
                <h2 className='text-xl md:text-5xl mt-2  font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>Dora</h2>
                <p className='text-xs lg:text-2xl md:text-lg text-left font-medium text-text'>Dukung UMKM Lokal, Mulai dari Sekitar Kita</p>
            </div>

            <div className='flex flex-col gap-3 justify-self-end justify-center'>
                    <h3 className='md:text-xl sm:text-lg text-base font-semibold '>Quick Navigation</h3>
                    <a href='/welcome#hero' 
                    className='hover:text-hover-button duration-150 text-small-font sm:text-xs md:text-base hover:border-b w-fit'>Home</a>
                    <a href='/welcome#features' 
                    className='hover:text-hover-button duration-150 text-small-font sm:text-xs md:text-base hover:border-b w-fit'>Features</a>
                    <a href='/welcome#demo' 
                    className='hover:text-hover-button duration-150 text-small-font sm:text-xs md:text-base hover:border-b w-fit'>Demo</a>
            </div>
        </div>

        <div className='w-full space-y-2 pb-1 border-t'>
            <p className='text-center md:text-lg sm:text-xs text-[10px] text-text p-2'>© 2025 Shadow Army. All rights reserved.</p>
        </div>
    </div>
  )
}