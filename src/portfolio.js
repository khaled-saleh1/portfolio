/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Khaled Saleh",
  title: "Hi all, I'm Khaled",
  subTitle: emoji(
    "Hi, I'm Khaled, a passionate new graduate and Software Developer 🚀 with experience as an intern building web applications and working with languages and technologies like C#, Java, React.js,Node,JS, TypeScript, and other cool libraries and frameworks."
  ),
  resumeLink: "./assets/resume/1Khaled_Saleh_Resume2025.pdf", // Ensure the file is in the public/assets/resume/ folder
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khaled-saleh1",
  linkedin: "https://www.linkedin.com/in/khaled-saleh6/",
  gmail: "ksaleh10611@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE SOFTWARE DEVELOPER WITH A STRONG FOUNDATION IN FULL-STACK DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Develop robust back-end services using technologies like C#, Java, .NET, and NestJS"
    ),
    emoji(
      "⚡ Design and maintain user-friendly front-end interfaces with React, Angular, HTML, and CSS"
    ),
    emoji(
      "⚡ Enhance and modernize web applications, ensuring compatibility and improving performance"
    ),
    emoji(
      "⚡ Integration of third-party services, including real-time APIs for enhanced functionality"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js" // No direct FontAwesome class for TS; using JS icon as a fallback
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "fas fa-server" // NestJS doesn't have a direct icon, using server icon
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database" // MongoDB doesn't have a direct icon; using database icon
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code" // No direct FontAwesome class for C#; using generic code icon
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database" // No direct FontAwesome class for MySQL; using database icon
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code" // No direct FontAwesome class for C++; using generic code icon
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Concordia University",
      logo: require("./assets/images/concordia-logo.png"),
      subHeader: "Bachelor of Engineering in Software Engineering",
      duration: "September 2021 - May 2025",
      desc: "Achieved 1x Dean’s List for maintaining a high GPA and contributed to extracurricular activities.",
      descBullets: [
        "GPA: 3.6",
        "Member of the Software Development Team in Concordia SAE Club (2023-2024)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "CAE",
      companylogo: require("./assets/images/cae2.jpg"),
      date: "May 2024 – Present",
      desc: "Worked on developing and modernizing full-stack applications with a focus on performance and accessibility.",
      descBullets: [
        "Designed and implemented back-end logic and SQL database tables using C# .NET 4.0",
        "Developed responsive front-end interfaces with HTML, CSS, and JavaScript",
        "Conducted unit testing with xUnit, raising code coverage from 0% to 60-80%",
        "Modernized over 40 web pages, ensuring compatibility with modern browsers"
      ]
    },
    {
      role: "C# Software Developer Intern",
      company: "Genetec",
      companylogo: require("./assets/images/genetec.jpeg"),
      date: "September 2023 – December 2023",
      desc: "Maintained and enhanced C# desktop applications, ensuring system reliability and performance.",
      descBullets: [
        "Improved automated test pass rates from 95% to 100% by implementing unit tests with MSTest and SpecFlow",
        "Diagnosed and resolved complex bugs using debugging tools",
        "Enhanced system reliability and functionality with key optimizations"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Concordia University",
      companylogo: require("./assets/images/concordia-logo.png"),
      date: "January 2024 – Present",
      desc: "Supported students in mastering OOP and data structures through hands-on assistance and evaluations.",
      descBullets: [
        "Conducted one-on-one sessions for a class of 100 students",
        "Collaborated with professors to evaluate assignments and exams"
      ]
    },
    {
      role: "Software Engineering Research Intern",
      company: "Healthcare Systems Research & Analysis Inc.",
      companylogo: require("./assets/images/healthcare_systems_r_a_logo.jpeg"),
      date: "September 2022 – December 2022",
      desc: "Focused on building machine learning models to enhance healthcare analysis and prediction systems.",
      descBullets: [
        "Built machine learning models to predict health parameters, improving accuracy by 15%",
        "Reduced data processing time by 30% using optimized neural network designs",
        "Specialized in Python-based models for health data prediction"
      ]
    }
  ]
};
const portfolioProjects = {
  display: true, // Set it to true to show portfolio projects Section
  projectList: [
    {
      title: "Onyva: Outdoor Trip Planning Application (Capstone Project)",
      description:
        "A comprehensive outdoor trip planning application designed to streamline group collaboration, expense tracking, and itinerary management.",
      videoUrl: null,
      imageUrl: "assets/images/onyvapic.png",
      githubLink: "https://github.com/nexus-capstone/Onyva",
      websiteLink: "https://onyva.vercel.app/"
    },
    {
      title: "Condofy: Condominium Management System",
      description:
        "A robust platform for managing condominium operations, including property profiles, reservations, and request handling.",
      videoUrl: "https://www.youtube.com/embed/YPnIT_WDVWg",
      imageUrl: null,
      githubLink: "https://github.com/Condofy24/CondoManagement",
      websiteLink: "https://condo-management-client.vercel.app/"
    },
    {
      title: "Hand-Controlled Flight Simulator",
      description:
        "A flight simulator controlled through hand gestures, developed during the CAE-sponsored ConUHacks Hackathon.",
      videoUrl: "https://www.youtube.com/embed/vDmcx5VmGMY",
      imageUrl: null,
      githubLink: "https://github.com/AbdallahSaid01/ConUHacks-2023",
      websiteLink: null
    },
    {
      title: "Spacecraft Shooting Game",
      description:
        "An immersive shooting game developed in C++ using the SFML library.",
      videoUrl: "https://www.youtube.com/embed/HvIWgTVydIc",
      imageUrl: null,
      githubLink: "https://github.com/TarekElalfi/Shooting-Game",
      websiteLink: null
    },
    {
      title: "Jobify: Career Service Application",
      description:
        "A career service platform designed to help users manage their job applications effectively.",
      videoUrl: "https://www.youtube.com/embed/lMcfmNYJRcQ",
      imageUrl: null,
      githubLink: "https://github.com/ramy-att/trivial-soen341project2023",
      websiteLink: null
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'm currently seeking new opportunities as a Software Developer. Feel free to reach out to discuss potential roles, projects, or just to connect! ",
  number: "+14385226060",
  email_address: "ksaleh10611@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  portfolioProjects
};
