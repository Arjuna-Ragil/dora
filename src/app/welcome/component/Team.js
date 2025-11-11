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
      "desc": "isi aja nanti",
      "git": "https://github.com/Arjuna-Ragil",
      "linked": "https://www.linkedin.com/in/arjunaragilputera/"
    },
    {
      "name": "Sarah Fajriah Rahmah",
      "shadow": "/sarahShadow.svg",
      "role": "Full-Stack Developer",
      "desc": "isi aja nanti",
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
    <div className='min-h-screen h-full w-full flex flex-col items-center justify-center'>
      <div
        className="h-full w-full flex flex-col items-center justify-center gap-10 sm:pt-25 pt-15"
        id="team">
        <div className="flex flex-col sm:items-center items-start justify-center gap-5 animate-slideDown [animation-timeline:view()]">
          <p className="border rounded-full sm:py-3 py-2 px-6 md:text-base sm:text-sm text-xs">
            The Humans Behind the Vision
          </p>
          <h2 className="md:text-5xl sm:text-4xl text-3xl font-semibold sm:text-center">
            <span>Designing tools </span> 
            <span className="text-primary">for people, by people</span>
          </h2>
          <p className="md:text-2xl sm:text-sm text-xs font-medium sm:text-center md:px-5 lg:px-40">
            We’re a small multidisciplinary team of planners, engineers, and
            designers crafting AI-powered tools to make regional planning
            faster, smarter, and more human-centered.
          </p>
        </div>
        <div className="h-full w-full grid md:grid-cols-3 gap-10">
          {team.map((person) => (
            <TeamCard key={person.name} nama={person.name} shadow={person.shadow} role={person.role} desc={person.desc} git={person.git} linked={person.linked}/>
          ))}
        </div>
      </div>
    </div>
  );
};