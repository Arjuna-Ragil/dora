import React from "react";

export default function Demo(){
  return (
    <div className="lg:h-screen h-full w-full bg-white xl:p-20 2xl:p-30 sm:py-15 p-5 pt-15" id="demo">
      <div className="w-full flex flex-row items-center md:justify-between gap-1 sm:gap-3 md:gap-10 animate-slideUp [animation-timeline:view()]">
        <div className="h-0.5 sm:w-1/3 md:h-1 w-13  bg-footer"></div>
        <p className="text-center w-full md:text-lg lg:text-2xl sm:text-xs text-small-font font-medium text-demo-pagebreak">
          Experience the planning flow — from scan to zone, in seconds.
        </p>
        <div className="h-0.5 md:h-1 sm:w-1/3  w-13 bg-footer"></div>
      </div>

      <div className="h-full w-full grid lg:grid-cols-2 items-center justify-center gap-10 lg:p-0 sm:p-10 px-3 py-4 animate-slideUp [animation-timeline:view()]"> 
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl flex flex-col justify-center md:px-10 py-8 px-4  md:gap-5">
          <div className="relative z-10 md:p-10 sm:px-5 sm:space-y-2 py-2 px-2 md:gap-5 space-y-1">
            <p className="bg-demo text-white md:font-semibold mb-4 py-1 
            px-2 sm:py-2 sm:px-3 md:p-3 rounded-full w-fit md:text-base sm:text-sm text-[10px]"> 
              Product Demo 
            </p> 
            <h3 className="md:text-5xl sm:text-4xl lg:text-4xl 2xl:text-5xl text-2xl font-bold">See the Tool in Action</h3> 
            <p className="md:text-lg sm:text-sm text-xs"> 
              Watch how our AI assistant transforms raw terrain data into smart, 
              explainable zoning layouts — all in under a minute. 
            </p> 
          </div>
        </div> 
        
        <div className=""> 
          <iframe 
            className="aspect-video w-full rounded-2xl " 
            src="https://www.youtube.com/embed/0YiRmlDCCeg?si=sfbgqQMx0_JhcfIR" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
          ></iframe> 
        </div> 
      </div> 
    </div>
  );
};