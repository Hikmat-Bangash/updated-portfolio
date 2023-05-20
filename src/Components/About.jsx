import React from "react";
import Image from "../assets/./img/about.jpeg";

// importing images
import callicon from "../assets/contactIcons/caller.png";
import whatsapp from "../assets/contactIcons/whatsapp.png";
import email from "../assets/contactIcons/email.png";

const contactIcons = [
  {
    index: 1,
    img: whatsapp,
    name: "whatasapp",
    link: "https://wa.me/923319395175",
    style: "w-[30px]"
  },
  {
    index: 2,
    name: "email",
    img: email,
    link: "mailto:engrhikmatbangash@gmail.com",
    style: "w-[35px] py-1"
  },
  {
    index: 3,
    name: "call",
    img: callicon,
    link:"Tel:923319395175",
    style: "w-[35px] py-1"
  }
]

const About = () => {
  return (
    <section
      id="about"
      className="about w-full pb-8 relative top-14 opacity-95 bg-gradient-to-t from-black via-gray-900 to-gray-900 z-10"
    >
      <div className="flex justify-center py-4 lg:py-8">
        <div class="md:text-3xl text-2xl font-bold top-4 tracking-widest ">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-500 border-b-2">
            ABOUT
          </span>
        </div>
      </div>

      <div className="container mx-auto flex lg:justify-between justify-center md:flex-col mt-5 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center xl:gap-20 mb-8">
          <img
            className="object-cover h-[250px] w-[370px] lg:h-[350px] lg:w-[450px] md:mx-auto lg:mx-24 rounded-2xl shadow-lg"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center md:mt-4 mt-4 text-center lg:items-start lg:text-left text-white">
            <div className="flex flex-col flex-wrap">
              <h2 className="text-3xl lg:text-3xl tracking-widest font-medium lg:font-bold mb-3 ">
                Hikmat Bangash
              </h2>
              <p className="lg:mb-4 text-md font-normal text-cyan-500 tracking-widest">
                Islamabad, Pakistan | +923319395175
              </p> 
              <hr className="lg:mb-4 mb-3 opacity-5" />
              <p className="flex-wrap justify-start mb-3 lg:w-[90%] opacity-80">
                I am a fresh graduate software engineer with expertise in front-end development using React.js and Next.js, as well as back-end development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). With over 1+ years of experience working in the field, I have developed a comprehensive understanding of advanced technologies that enable me to design, develop, and deploy high-quality software solutions.
              </p>
              <br />
              <p className="flex-wrap lg:mb-8 mb-3 lg:w-[90%] opacity-80">
                My passion for software development is fueled by my drive to constantly push the limits of what is possible. I am a flexible and professional developer who is always eager to take on new challenges in the rapidly evolving world of software development.
              </p>
            </div>
            <div className="flex justify-center items-center">
           {contactIcons.map(({index,name,img,link,style})=>(
             <button key={index} className="hover:bg-black opacity-60 hover:opacity-100 align-middle border-2 border-cyan-500 ml-3 mt-7 rounded-xl text-lg font-mono tracking-wider px-2 cursor-pointer">
              <a href={link} target="_blank" className="flex justify-between items-center"><p className={`text-sm font-thin text-cyan-500`}>{name}</p> <img src={img} className={`${style}`} alt={name} /> </a>
            </button>
          ))}
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};
 
export default About;
