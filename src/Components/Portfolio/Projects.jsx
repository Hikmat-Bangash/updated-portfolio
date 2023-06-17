import React, { useState, useEffect } from 'react';

// import data
// projects images
import project0 from '../../assets/img/pmru2.png';
import Project1 from '../../assets/projects/ChatGPT.jpeg';
import Project2 from '../../assets/projects/dashboard.png';
import Project3 from '../../assets/projects/socialApp.jpg';
import Project4 from '../../assets/projects/pizzaApp.png';
import Project5 from '../../assets/projects/chatbot.jpg';
import Project6 from '../../assets/projects/TwitterApi.jpg';
import Project7 from '../../assets/projects/HotelBookingApi.jpg';
import Project8 from '../../assets/projects/YoutubeApi.png';
import Project9 from '../../assets/projects/ecommerce.jpg';
import Project10 from '../../assets/projects/movietheater.jpg';
import Project12 from '../../assets/projects/notesmaking.jpg';
import Project11 from '../../assets/projects/weather.jfif';
import Project13 from '../../assets/projects/musicplayer.jpg';




// projects
const projectsData = [
  {
    id: '0',
    image: project0,
    name: 'PMRU GOVT KPK',
    category: 'Next',
    code: "https://gitlab.com/grey-software/nest/community-cleanup",
    live: "https://gitlab.com/grey-software/nest/community-cleanup",
  },
  {
    id: '1',
    image: Project1,
    name: 'ChatGPT clone',
    category: 'Next',
    code: "https://github.com/Hikmat-Bangash/chatGPT-clone",
    live: "https://chat-gpt-clone-eight-pi.vercel.app/",
  },
  {
    id: '3',
    image: Project3,
    name: 'Social Media App',
    category: 'React',
    code: "https://github.com/Hikmat-Bangash/Social-Media_app",
    live: "https://social-media-app-red.vercel.app/auth",
  },
  {
    id: '5',
    image: Project5,
    name: 'AI Chatbot pwa app',
    category: 'React',
    code: "https://github.com/Hikmat-Bangash/AI-Assistant-pwa-app",
    live: "https://ai-assistant-hkb.vercel.app/"
  },
  {
    id: '2',
    image: Project2,
    name: 'Dashboard',
    category: 'React',
    code: "https://github.com/Hikmat-Bangash/Dashboard-in-React.js",
    live: "https://dashboard-in-react-js.vercel.app/",
  },
 
  {
    id: '4',
    image: Project4,
    name: 'Pizza App',
    category: 'Next',
    code: " https://github.com/Hikmat-Bangash/Pizza-Ordering-app",
    live: "null",
   
  },
 
  {
    id: '6',
    image: Project6,
    name: 'Social Media API',
    category: 'API',
    code: "https://github.com/Hikmat-Bangash/Social-Media-App-backend",
    live: "null",
  },
  {
    id: '7',
    image: Project7,
    name: 'HRB Project Api',
    category: 'API',
    code: "https://github.com/Hikmat-Bangash/Hotel-room-booking-project-api",
    live: "null",
  },
  {
    id: '8',
    image: Project8,
    name: 'Youtube clone API',
    category: 'API',
    code: "https://github.com/Hikmat-Bangash/youtube_clone",
    live: "null",
  },
  {
    id: '9',
    image: Project9,
    name: 'E-Commerce App',
    category: 'React',
    code: "https://github.com/Hikmat-Bangash/e-commerce-app",
    live: "https://ecommercehb.netlify.app/"
  },
  {
    id: '10',
    image: Project10,
    name: 'Movie theater',
    category: 'JavaScript',
    code: "https://github.com/Hikmat-Bangash/Movie-Theater",
    live: "https://movietheaterhb.netlify.app/"
  },
  {
    id: '11',
    image: Project11,
    name: 'Weather App',
    category: 'React',
    code: "https://github.com/Hikmat-Bangash/Weather-app",
    live: "https://weather-apphb.netlify.app/"
  },
  {
    id: '12',
    image: Project12,
    name: 'Notes making App',
    category: 'JavaScript',
    code: "https://github.com/Hikmat-Bangash/Notes-Making-app",
    live: "https://hikmatnotesmaking.netlify.app/"
  },
  {
    id: '13',
    image: Project13,
    name: 'Music player',
    category: 'JavaScript',
    code: "https://github.com/Hikmat-Bangash/Music-player",
    live: "https://musicplayerhb.netlify.app/"
  },
];

// projects
const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'React',
  },
  {
    name: 'API',
  },
  {
    name: 'Next',
  },
];


// import components
import Project from './Project.jsx';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-row md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? 'active' : ''
                  } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className='grid md:gap-y-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-6'>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
