import React from 'react'
// skills images
import HTML from '../assets/skills/html5.png';
import CSS from '../assets/skills/css3.png';
import JAVASCRIPT from '../assets/skills/js.png';
import REACT from '../assets/skills/reactjs.png';
import GIT from '../assets/skills/git.png';
import NEXTJS from '../assets/skills/nextjs.png';
import EXPRESS from '../assets/skills/express.png';
import MONGODB from '../assets/skills/mongodb.png';
import MYSQL from '../assets/skills/mysql.png';
import TAILWIND from '../assets/skills/tailwindcss.png';
import BOOTSTRAP from '../assets/skills/bootstrap.png';
import REDUX from '../assets/skills/redux.png';
import ZUSTAND from '../assets/skills/zustand.png'
import NODE from '../assets/skills/nodejs.png'
import docker from '../assets/skills/docker.png'
import typescript from '../assets/skills/typescript.png'
import sequelize from '../assets/skills/sequelize-logo.png'

const skills = [

  {
    name: "TAILWIND.CSS",
    image: TAILWIND,
    style: "shadow-teal-400",
    level: "Expert"
  },
  {
    name: "BOOTSTRAP",
    image: BOOTSTRAP,
    style: "shadow-indigo-600",
    level: "Expert"
  },
  {
    name: "JAVASCRIPT",
    image: JAVASCRIPT,
    style: "shadow-yellow-500",
    level: "Advanced"
  },
  {
    name: "TYPESCRIPT",
    image: typescript,
    style: "shadow-blue-500",
    level: "Intermediate"
  },
  {
    name: "REACT",
    image: REACT,
    style: "shadow-cyan-400",
    level: "Expert"
  },
  {
    name: "NEXTJS",
    image: NEXTJS,
    style: "shadow-cyan-200",
    level: "Expert"
  },
  {
    name: "REDUX",
    image: REDUX,
    style: "shadow-purple-600",
    level: "Advanced"
  },
  {
    name: "ZUSTAND",
    image: ZUSTAND,
    style: "shadow-amber-600",
    level: "Advanced"
  },
  {
    name: "NODEJS",
    image: NODE,
    style: "shadow-lime-600",
    level: "Intermediate"
  },
  {
    name: "EXPRESS",
    image: EXPRESS,
    style: "shadow-neutral-400",
    level: "Intermediate"
  },
  {
    name: "SEQUELIZE",
    image: sequelize,
    style: "shadow-neutral-400",
    level: "Intermediate"
  },
  {
    name: "DOCKER",
    image: docker,
    style: "shadow-blue-600",
    level: "Beginner"
  },
  {
    name: "MONGODB",
    image: MONGODB,
    style: "shadow-lime-800",
    level: "Intermediate"
  },
  {
    name: "MYSQL",
    image: MYSQL,
    style: "shadow-indigo-400",
    level: "Intermediate"
  },
  {
    name: "GIT",
    image: GIT,
    style: "shadow-red-500",
    level: "Intermediate"
  },
];


const Experience = () => {
  return (
    <section id='experience' className='Experience w-full relative top-14 bg-gray-900  z-10'>
    <div className="flex justify-center py-16 lg:py-8">
      <div class="md:text-3xl text-2xl  font-bold tracking-widest top-4 ">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-500 border-b-2 text-blue-500">
          Experience
        </span>
      </div>
    </div>

   <div className="mt-8 flex justify-center w-full">
     <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 sm:gap-14 gap-y-10 align-middle mb-8 ">
      {skills.map((skill)=>(
        <div key={skill.name} className={`flex flex-col justify-between items-center text-white hover:scale-105 duration-500 py-4 px-3  rounded-lg shadow-md ${skill.style}`}>
         <h5 className='mx-auto mb-3 opacity-70 tracking-widest capitalize text-sm font-thin'>{skill.name} </h5>
         <img className='mx-auto w-[80px] h-[65px] object-cover' src={skill.image} alt="skill image" />
          <h4 className='mx-auto mt-3 opacity-50 font-thin'>Level: <span className='font-semibold tracking-wide'> {skill.level}</span></h4>
       </div>
      ))}

     </div>
   </div>


    </section>
  )
}

export default Experience