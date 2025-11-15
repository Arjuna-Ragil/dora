import React from "react";
import Footer from "./Footer";
import Image from "next/image";
import TeamCard from "./subcomponent/teamCard";

export default function Team(){
  const team = [
    {
      "name": "Arjuna Ragil Putera",
      "shadow": "/junaShadow.svg",
      "role": "Full-Stack Developer",
      "desc": "kinda proud making this website. Quite the step up from my previous projects. More advanced, more complex, and more fun to work on with the team.",
      "git": "https://github.com/Arjuna-Ragil",
      "linked": "https://www.linkedin.com/in/arjunaragilputera/"
    },
    {
      "name": "Sarah Fajriah Rahmah",
      "shadow": "/sarahShadow.svg",
      "role": "Full-Stack Developer",
      "desc": "Always curious about building stuff that’s useful. Planix was a chance to push myself—mixing design, code, and real-world problems into something more impactful. Still learning, still growing, but proud of where this is going.",
      "git": "https://github.com/s-erzv",
      "linked": "https://www.linkedin.com/in/serzv/"
    },
    {
      "name": "Hazri Agung Endarya",
      "shadow": "/hazriShadow.svg",
      "role": "Full-Stack Developer",
      "desc": "isi aja nanti",
      "git": "https://github.com/HazriAE",
      "linked": "https://www.linkedin.com/in/hazri-agung-endarya-41b688322/"
    },
  ]

  return (
    <>
      <div className='min-h-screen h-full w-full flex flex-col items-center justify-center p-15' id="team">
        <div
          className="h-full w-full flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col sm:items-center items-start justify-center gap-5 animate-slideDown [animation-timeline:view()]">
            <h2 className="md:text-5xl sm:text-4xl text-3xl font-semibold sm:text-center"> Dibangun Bareng, Buat Lokal </h2>
            <p className="md:text-2xl sm:text-sm text-xs font-medium sm:text-center md:px-5 lg:px-40">
              Kami adalah tim yang percaya kalau dukung UMKM itu bukan cuma soal belanja, tapi soal tumbuh bareng. 
              Yuk kenalan sama orang-orang di balik web ini!
            </p>
          </div>
          <div className="md:h-125 w-full h-100 grid md:grid-cols-3 gap-10 p-5">
            {team.map((person) => (
              <TeamCard key={person.name} nama={person.name} shadow={person.shadow} role={person.role} desc={person.desc} git={person.git} linked={person.linked}/>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};