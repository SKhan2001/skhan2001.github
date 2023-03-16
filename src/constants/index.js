import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    carrent,
    networking,
    linux,
    rutgers,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "SAS Developer",
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
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },

    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      company_name: "Rutgers University",
      icon:rutgers,
      iconBg: "#383E56",
      date: "2019-2023",
      points: [
        "My time at Rutgers as a CS major has been an incredible journey, filled with challenging coursework and exciting opportunities to apply my skills.",
        "Through my coursework and extracurricular activities at Rutgers, I have gained a deep understanding of computer science principles and how they can be applied to real-world problems. ",
        "As a CS major at Rutgers, I have had the opportunity to work with some of the brightest minds in the field and collaborate on cutting-edge research projects.",
        "I am proud to have been a part of the vibrant and supportive CS community at Rutgers, and I look forward to using the skills and knowledge I have gained to make a positive impact in the world of technology.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "BuyMe",
      description:
        "Web Application that allowed users to sell and buy items through a bid from an online auction. Users can submit tickets that were answered by customer represenatives which were assigned by administrators. Data was stored in SQL which strengthened my knowledge of fullstack programming.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "Apache Tomcat",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SKhan2001/BuyMe",
    },
    {
      name: "Shell",
      description:
        "Created a Linux terminal through C programming that ran programs, managed processes, and controlled file system. Handled for bombing, zombie reaping, child processes. This project demonstrated deep understanding of systems programming specifically the linux system. ",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Linux",
          color: "green-text-gradient",
        },
        {
          name: "Bash",
          color: "pink-text-gradient",
        },
      ],
      image: linux,
      source_code_link: "https://github.com/SKhan2001/Shell",
    },
    {
      name: "DNS Server",
      description:
        "This is a TCP socket programming project in Python that involves multiple devices. It uses two DNS servers, a local DNS server, and a client to provide a reliable DNS service by implementing a redundant server setup. The project demonstrates expertise in socket programming and networking concepts. ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TCP/Socket",
          color: "green-text-gradient",
        },
        {
          name: "Networking",
          color: "pink-text-gradient",
        },
      ],
      image: networking,
      source_code_link: "https://github.com/SKhan2001/DNS-Server",
    },
  ];
  
  export { services, experiences, technologies, projects };