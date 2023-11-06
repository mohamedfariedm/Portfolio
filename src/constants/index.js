import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    FreshCart,
    WeekEnd,
    BookMark,
    Kitchen,
    Mealfay,
    SPA,
    Danials,
    Dev,
    git,
    threejs,
    Weather,
    github
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "JavaScript Developer",
      icon: mobile,
    },
    {
      title: "Next.Js Developer",
      icon: backend,
    },
    {
      title: "React.Js Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "WeekEnd Movies",
      company_name: "React.Js",
      icon: github,
      iconBg: "#383E56",
      date: "https://mohamedfariedm.github.io/WE-React-Movies/#/",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "an online database of information related to authentication Integration with RouteEGY API.",
        "an online database of information related to Movies Integration with TMDB API.",
        "Design project state management using React-Query(Tan-stack).",
        "Using Axios , Formik , Yup , BootStrap , React-Hot-Toast .",
      ],
    },
    {
      title: "Fresh Cart",
      company_name: "React.Js",
      icon: github,
      iconBg: "#383E56",
      date: "https://mohamedfariedm.github.io/FreshCartReact/",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "an online database of information related to products Integration with RouteProducts API.",
        "Design project state management using Redux-toolkit.",
        "Using Axios , Formik , Yup , BootStrap.",
      ],
    },
    {
      title: "First SPA",
      company_name: "React.js",
      icon: github,
      iconBg: "#E6DEDD",
      date: "https://mohamedfariedm.github.io/first-SPA",
      points: [
        "my first single page application using React.Js .",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "tailwind.",
        "React-Router-Dom.",
        
      ],
    },
    {
      title: "Kitchen Plog",
      company_name: "JavaScript",
      icon: github,
      iconBg: "#383E56",
      date: "https://mohamedfariedm.github.io/Kitchen-Plog",
      points: [
        "Developing and maintaining web application using JavaScript and other related technologies.",
        "an online database of information related to Meals Integration with Meals API.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "simulation the single page application using javascript"
      ],
    },
    {
      title: "Book Mark",
      company_name: "JavaScript",
      icon: github,
      iconBg: "#E6DEDD",
      date: "https://mohamedfariedm.github.io/Bookmark-name",
      points: [
        "CRUD using JavaScript , HTML ,CSS and BootStrap.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "simulation the single page application using javascript"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but faried proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like mohamed faried .",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After faried optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "WeekEnd Movies",
      description:
      "Developing and maintaining web application using React.js and other related technologies.an online database of information related to Movies Integration with TMDB API." , 
  tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "React-Query",
          color: "green-text-gradient",
        },
      ],
      image: WeekEnd,
      source_code_link: "https://mohamedfariedm.github.io/WE-React-Movies/#/",
    },
    {
      name: "Fresh Cart",
      description:
      "Developing and maintaining web application using React.js and other related technologies.an online database of information related to products Integration with RouteProducts API." , 
  tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: FreshCart,
      source_code_link: "https://mohamedfariedm.github.io/FreshCartReact",
    },
    {
      name: "React SPA",
      description:
      "first Single page Application using React.js and other related technologies." , 
  tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "green-text-gradient",
        },
        {
          name: "ScSS",
          color: "pink-text-gradient",
        },
      ],
      image: SPA,
      source_code_link: "https://mohamedfariedm.github.io/first-SPA/",
    },
    {
      name: "Weather",
      description:
      "Developing and maintaining web application using JavaScript and other related technologies.an online database of information related to weather Integration with Weather API." , 
  tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "green-text-gradient",
        },
      ],
      image:  Weather,
      source_code_link: " https://mohamedfariedm.github.io/weather-/",
    },
    {
      name: "Kitchen Plog",
      description:
      "sumilation Single Page Application using JavaScript and other related technologies.an online database of information related to Meals Integration with Meals API." , 
  tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "JQuery",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: Kitchen,
      source_code_link: "https://mohamedfariedm.github.io/Kitchen-Plog",
    },
    {
      name: "BookMark",
      description:
      "Crud web application using JavaScript and other related technologies.an online database of information related to products Integration with RouteProducts API." , 
  tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: BookMark,
      source_code_link: "https://mohamedfariedm.github.io/FreshCartReact",
    },
    {
      name: " Mealfay",
      description:
      "Developing an UI web application for Meals  using HTML CSS BootStrap only without API " , 
  tags: [
        {
          name: "BootStrap5",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: Mealfay,
      source_code_link: "https://mohamedfariedm.github.io/Mealfay",
    },
    {
      name: " Danials",
      description:
      "Developing an UI web application for Portfolio using HTML CSS BootStrap only without API " , 
  tags: [
        {
          name: "BootStrap5",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: Danials,
      source_code_link: "https://mohamedfariedm.github.io/Danials",
    },
    {
      name: " Devfoilo",
      description:
      "Developing an UI web application for Portfolio  using HTML CSS only without API " , 
  tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: Dev,
      source_code_link: "https:/mohamedfariedm.github.io/Devfoilo",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };