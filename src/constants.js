// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/aktu.jpg';
import bsaLogo from './assets/education_logo/spi.png';
import vpsLogo from './assets/education_logo/mh.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/chat.svg';
import movierecLogo from './assets/work_logo/movie.webp';
import taskremLogo from './assets/work_logo/net.webp';
import npmLogo from './assets/work_logo/9.png';
import webverLogo from './assets/work_logo/5.jpg';
import cmLogo from './assets/work_logo/10.webp';
import imagesearchLogo from './assets/work_logo/12.jpg';
import removebgLogo from './assets/work_logo/remove_bg.png';
// import randombg from './assets/work_logo/rn.avif';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'ANT DESIGN', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      {name:'Node Js',logo:nodejsLogo},
      {name:'Express Js',logo:expressjsLogo}
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "AKTU University, Lucknow",
      date: "mar 2021 - jul 2025",
      grade: "8.6 CGPA",
      desc: "I have completed my Bechlor degree (B.TECH) in Electronics Engineering from AKTU University, Lucknow. During my time at AKTU, I gained a strong foundation in programming, software development, and Computer and Electronics. I have studied courses such as Web Development, Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "B.TECH - Bechlor of technology",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "InternShip from Softpro india pvt ltd company.",
      date: "oct 2024 - dec 2024",
      grade: "A+",
      desc: "I completed Internship programe in web developement (DJANGO) from Softpro, Lucknow. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Web Developement using Python (Django)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Maharishi Bal Vidya Mandir Inter College, Lucknow",
      date: "Apr 2019 - March 2020",
       grade: "A",
      desc: "I completed my class 12 education from Maharishi Bal Vidya Mandir Inter College, Lucknow, under the UP Board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "UP(XII) - PCM",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Maharishi Bal Vidya Mandir Inter College, Lucknow",
      date: "Apr 2017 - March 2018",
      grade: "A+",
      desc: "I completed my class 10 education from Maharishi Bal Vidya Mandir Inter College, Lucknow, under the UP board, where I studied Science with Computer.",
      degree: "UP(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Javascript CRUD Operation",
      description:
        "Javascript complete crud operation with search and pagination also upload image",
      image:cmLogo,
      tags: ["HTML", "CSS", "JavaScript","LocaStorage"],
      github: "https://github.com/DoremDorem/JAVACSRIPT-CRUD-OPERATION.git",
      webapp: "https://doremdorem.github.io/JAVACSRIPT-CRUD-OPERATION/",
    },
    {
      id: 1,
      title: "Quick Gpt",
      description:
        "A full-stack Chat Gpt app user can signin or signup and asking question like chatgpt and also generate image",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/DoremDorem/Quickgpt.git",
      webapp: "https://quick-gpt-ecru.vercel.app",
    },
    {
      id: 2,
      title: "Movie Ticket Booking App",
      description:
        "A React-based web application this is a movie ticket booking website and having smart auth system",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/DoremDorem/Quickshow.git",
      webapp: "https://quickshow-client-woad.vercel.app",
    },
    {
      id: 3,
      title: "MERN Chat App",
      description:
        "Real time chat app using MERN Stack",
      image: npmLogo,
      tags: ["React JS", "Node.js",'Mongo DB','Express Js', "NPM", "Validation"],
      github: "https://github.com/DoremDorem/chat-app.git",
      webapp: "https://chat-app-gules-two.vercel.app",
    },
    {
      id: 4,
      title: "Netflix Complete clone",
      description:
        "this is the complete full stack netflix website using firebase database and TMDB website",
      image: taskremLogo,
      tags: ["JavaScript", "Firebase", "HTML", "CSS",'React',],
      github: "https://github.com/DoremDorem/netflix-clone.git",
      webapp: "https://movie-show-two.vercel.app",
    },
    {
      id: 5,
      title: "Forever Ecomerce Website",
      description:
        "This is the full stack e-commerce website with admin panel and payment intigration i have integrate two payment method one is razorpay and other is stripe also having cash on delivery",
      image: webverLogo,
      tags: ["MONGO DB","EXPRESS JS","NODE JS","REACT JS","RAZORPAY","STRIPE","TAILWIND CSS"],
      github: "https://github.com/DoremDorem/forever-fullstack.git",
      webapp: "https://forever-frontend-theta-rust.vercel.app",
    },
    {
      id: 6,
      title: "Contact Saving App",
      description:
        "Contact saving app using HTML CSS and JS and also use Localstorage we can login signup and create contact and also delete and edit contact",
      image: cmLogo,
      tags: ["JS", "HTML", "CSS", "BOOTSTRAP"],
      github: "https://github.com/DoremDorem/contact-Saving-App.git",
      webapp: "https://contact-saving-app.vercel.app",
    },
    {
      id: 7,
      title: "Porfolio website",
      description:
        "Porfolio website using html css js",
      image: imagesearchLogo,
      tags: ["JS", "HTML", "BOOTSTRAP", "CSS",],
      github: "https://github.com/DoremDorem/Portfolio-Website.git",
      webapp: "https://portfolio-website-mu-kohl-39.vercel.app",
    },
    {
      id: 8,
      title: "Scientific Calculator",
      description:
      "calculator using HTML CSS and JS",
      image: removebgLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/DoremDorem/Scientific-Calculator.git",
      webapp: "https://scientific-calsi-three.vercel.app/",
    },
       {
      id: 9,
      title: "Random Color Generator",
      description:
      "Random color generator using HTML CSS and JS",
      image: removebgLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/DoremDorem/Random-Color-Generator.git",
      webapp: "https://doremdorem.github.io/Random-Color-Generator/",
    },
    
  ];  