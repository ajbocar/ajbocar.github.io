interface Link {
  text: string;
  url: string;
}

interface Job {
  title: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
  tech?: {
    label?: string;
    stack: string;
  };
}

interface Project {
  name: string;
  company: string;
  period?: string;
  links?: Link[];
  description: string;
  details: string[];
  tech?: string;
}

interface Education {
  school: string;
  degree: string;
  period: string;
}

interface Certification {
  name: string;
  details: string;
  links?: Link[];
}

interface Resume {
  header: {
    name: string;
    shortName: string;
    location: string;
    phone: string;
    email: string;
    social: Link[];
  };
  profile: string;
  skills: {
    category: string;
    items: string;
  }[];
  experience: Job[];
  education: Education[];
  certifications: {
    items: Certification[];
    profiles: Link[];
  };
  projects: Project[];
}

export const resume: Resume = {
  header: {
    name: "ANWAR JULIAN T. BOCAR",
    shortName: "AJ BOCAR",
    location: "Diliman, Quezon City",
    phone: "(+63) 993-7959007",
    email: "ajbocar@gmail.com",
    social: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/abocar/" },
      { text: "Portfolio", url: "https://ajbocar.dpdns.org/" }
    ]
  },
  profile: "Full Stack Web / Mobile Developer with strong analysis and debugging skills. Particularly interested in developing web applications using PHP, MySQL, HTML, CSS, JavaScript (ReactJS, Angular, VueJS) and mobile application development (iOS, Android, React Native, Cordova).",
  skills: [
    { category: "Front-end", items: "React, Vue, jQuery, Angular, Next.js, Nuxt.js" },
    { category: "Back-end", items: "PHP, Node.js, Symfony, Laravel, Express, Nest.js, SlimPHP" },
    { category: "Mobile", items: "React Native (Expo), Ionic Framework, Cordova" },
    { category: "Databases", items: "MySQL, PostgreSQL, DB2, MongoDB, CouchDB" },
    { category: "Containers/Cloud", items: "Docker, Docker Compose, Portainer, AWS ECR & ECS" },
    { category: "DevOps / CI/CD", items: "JIRA, Git, Bitbucket, GitHub, GitLab" },
    { category: "Systems", items: "Unix commands and scripting" },
    { category: "AI", items: "Proficient in leveraging AI tools to speed up development" }
  ],
  experience: [
    {
      title: "PHP AWS Developer",
      company: "3 Dot Digital, Brisbane (Remote)",
      period: "Apr 2025 – Present",
      highlights: [
        "Replaced a per-second, 9-day cron scan with a trigger-based change-capture pipeline (AFTER UPDATE trigger → queue → batch stored procedure) that processed only modified shifts in near real time, eliminating full-table scans and cutting DB load while preserving UX; added a session-variable guard to prevent recursive trigger execution.",
        "Supported a client's school CMS/CRM system by resolving support tickets and optimizing the database by moving frequently used tables to a high-capacity DB.",
        "Developed a scalable Docker-based system that orchestrates multiple AI agents (Gemini, OpenAI, Claude, Groq, Ollama) to perform concurrent web automation tasks with modular Python architecture, configurable task management, comprehensive logging, real-time monitoring, GIF recording, and cross-platform compatibility (Linux/Windows/PowerShell) with Docker Compose orchestration for simultaneous multi-instance deployments."
      ],
      tech: {
        label: "Technologies",
        stack: "ReactJS, Material UI, Docker, Portainer, AWS (CloudWatch, EC2, EBS, S3, RDS), PHP 7/8, MySQL, JIRA, Git, Bitbucket, GitHub Copilot, Grafana, Agentic AI Coding"
      }
    },
    {
      title: "Software Engineer",
      company: "Lamudi Philippines, Makati City",
      period: "Sep 2022 – Mar 2025",
      highlights: [
        "Part of a team of three supporting Lamudi's Agent Portal.",
        "Front-end development (React 16+); back-end development using Symfony 4.4 microservices hosted in AWS and on-prem via Portainer.",
        "Implemented a new OTP functionality with anti-spam features that sends SMS or WhatsApp depending on criteria.",
        "Added new features and handled issues for the Agent Portal app."
      ],
      tech: {
        label: "Technologies",
        stack: "ReactJS, Material UI, Docker, Portainer, AWS (CloudWatch, ECR, ECS, S3, RDS), PHP 7/8, Symfony 4.4, MySQL, JIRA, Figma, Git, Bitbucket"
      }
    },
    {
      title: "Full Stack Developer",
      company: "IBM (Sprint/T-Mobile), Quezon City",
      period: "Feb 2021 – Sep 2022",
      highlights: [
        "Part of a team of three developing iPerform, a performance evaluation tool for internal use.",
        "Primary responsibility for front-end development using Angular 10 (legacy) & React 16+."
      ],
      tech: {
        label: "Technologies",
        stack: "ReactJS, Material UI, Angular, jQuery, Bootstrap, RxJS, Spring Boot, Oracle, Fastify (Node.js), JIRA, Bitbucket"
      }
    },
    {
      title: "IBM (Bench)",
      company: "IBM, Quezon City",
      period: "Nov 2020 – Jan 2021",
      highlights: [
        "Studied Laravel, Spring Boot, Angular, ReactJS & React Native in preparation for deployment.",
        "Assisted XCEL Energy – AG2 Mainframe Modernization by debugging a JavaScript issue."
      ]
    },
    {
      title: "Mobile Developer / Lead Developer",
      company: "IBM (Electrolux), Quezon City",
      period: "Dec 2015 – Oct 2020",
      highlights: [
        "Hybrid Mobile development team member; later Lead Developer of Frigidaire app to control appliances (Aircon, Dehumidifier, Convertible Refs) online.",
        "Android team member for Frigidaire 2 / Electrolux Life (Aircon, Dehumidifier, Refs, Ovens).",
        "Monitored Frigidaire App across four environments; handled provisioning/database issues.",
        "Built Electrolux Self-Service Portal for L1 support to access customer & appliance info."
      ],
      tech: {
        label: "Tools/Tech",
        stack: "ReactJS, Redux, Material-UI, BackboneJS, RatchetJS, Mustache, jQuery, Underscore, DB2, MQTT, Worklight 6, AWS Cognito"
      }
    },
    {
      title: "Mobile Developer",
      company: "IBM (Sprint), Quezon City",
      period: "May 2013 – Nov 2015",
      highlights: [
        "Developed an iPad app to help Sprint sales agents sell mobile plans online."
      ],
      tech: {
        stack: "Titanium Appcelerator (iOS/Android), JavaScript, XML, JSON, Objective-C",
        label: "Tech"
      }
    }
  ],
  education: [
    {
      school: "University of the Philippines IT Training Center, Quezon City",
      degree: "Certificate in IT (Application Development)",
      period: "Jun 2006 – Apr 2007"
    },
    {
      school: "Informatics International College, Manila",
      degree: "BS in Computer Science",
      period: "Jun 1998 – Apr 2002"
    }
  ],
  certifications: {
    items: [
      {
        name: "PhilNITS FE",
        details: "October 2006 passer (FE01-0175)",
        links: [
          { text: "View Passers", url: "http://www.philnits.org/passers201505.html#oct06" },
          { text: "About PhilNITS", url: "http://www.philnits.org/about.html" }
        ]
      },
      {
        name: "JLPT",
        details: "Level 3 (Dec 2009) · Level 4 (Dec 2006)"
      },
      {
        name: "Zend Certified Engineer (PHP 5.3)",
        details: "",
        links: [
          { text: "View Certificate", url: "https://www.zend-zce.com/en/yellow-pages/ZEND015476" }
        ]
      }
    ],
    profiles: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/abocar/" },
      { text: "CodePen", url: "https://codepen.io/ajbocar" },
      { text: "GitHub", url: "https://github.com/ajbocar" }
    ]
  },
  projects: [
    {
      name: "freshOps",
      company: "3 Dot Digital",
      period: "Apr 2025 – May 2025",
      description: "Workforce-management platform for commercial cleaning companies (AU).",
      details: [
        "Optimized MySQL shift processing to reduce DB costs.",
        "Replaced a per-second, 9-day cron scan with a trigger-based change-capture pipeline",
        "Implemented session variable guards to prevent recursive triggers"
      ],
      tech: "AWS, Node.js, Sails, MySQL, React"
    },
    {
      name: "Schoolzine / SchooLinks",
      company: "3 Dot Digital",
      period: "Apr 2025 – May 2025",
      description: "Parent-engagement and school communications platforms.",
      details: [
        "Resolved support tickets; optimized databases by moving high-use tables to a high-capacity DB."
      ],
      tech: "AWS, Grafana, JIRA, Symfony, PHP, MySQL, jQuery, Twig"
    },
    {
      name: "Bunjyou-Navi",
      company: "Yoshii Software Solution Philippines Corp",
      period: "May 2007 – Apr 2010",
      links: [{ text: "Visit Site", url: "http://bunjyo-navi.com/v3/public/" }],
      description: "Pharmacy inventory system used by most pharmacies in Kansai, Japan.",
      details: [
        "One of three developers; implemented search, invoicing, pharmacy & medicine CRUD.",
        "Proposed use of Zend Framework, jQuery (AJAX), and Blueprint CSS.",
        "App is in Japanese."
      ],
      tech: "PHP (Zend), jQuery, CSS (Blueprint), SVN, NetBeans"
    },
    {
      name: "Barkota",
      company: "Yoshii Software Solution Philippines Corp",
      period: "Aug 2011 – Sep 2011",
      links: [{ text: "Visit Site", url: "http://barkota.com/" }],
      description: "Online booking system for passenger ships.",
      details: [
        "One of four developers; built CRUD for companies, schedules, ports; contributed to site & DB design.",
        "Recommended REST and HMVC."
      ],
      tech: "PHP (Zend), jQuery, CSS (Blueprint), SVN, NetBeans, REST"
    },
    {
      name: "Frigidaire / Electrolux Life",
      company: "IBM (Electrolux)",
      period: "Dec 2015 – Oct 2020",
      links: [
        { text: "Android App", url: "https://play.google.com/store/apps/details?id=com.ELXSmart" },
        { text: "iOS App", url: "https://apps.apple.com/us/app/frigidaire-smart-appliances/id990761024" },
        { text: "Demo Video", url: "https://www.youtube.com/watch?v=4qtg7r81WYs" }
      ],
      description: "Native app to control connected appliances (Refs, Freezers, Dehumidifier, Aircon, Ovens). Global deployment.",
      details: [
        "Lead Developer for hybrid version (Worklight 6)",
        "Android team member for native version",
        "Integrated with appliance middleware via MQTT"
      ],
      tech: "Android (Java, RxJava), ReactJS, Redux, Material-UI, AWS Cognito"
    },
    {
      name: "Lamudi",
      company: "Lamudi Philippines",
      period: "Sep 2022 – Mar 2025",
      links: [
        { text: "PH Site", url: "https://www.lamudi.com.ph/" },
        { text: "ID Site", url: "https://www.lamudi.co.id/" },
        { text: "iOS App", url: "https://apps.apple.com/us/app/lamudi-buy-rent-properties/id1483420367" },
        { text: "Android App", url: "https://play.google.com/store/apps/details?id=com.lamudi.gamoraph&hl=en&gl=US" }
      ],
      description: "Public web app to search/post real estate listings across multiple countries (MX, ID, PH, BD).",
      details: [
        "Part of the team maintaining core platform and mobile apps",
        "Worked on web and mobile app features",
        "Handled microservices and infrastructure"
      ],
      tech: "AWS, PHP, ReactJS, React Native (Expo), Memcache; microservices architecture"
    },
    {
      name: "React Native Quiz App",
      company: "Personal",
      period: "Nov 2020 – Present",
      links: [
        { text: "Expo Snack", url: "https://snack.expo.io/@ajbocar/quiz-app" },
        { text: "GitHub", url: "https://github.com/ajbocar/react-native-quiz-app" }
      ],
      description: "Learning project for React Native (functional components & hooks).",
      details: [
        "Sole developer; runs on Android/iOS via Expo."
      ],
      tech: "React Native (Expo), UI Kitten"
    },
    {
      name: "Drug Checker Pregnancy EN / JA",
      company: "Yoshii Software Solution Philippines Corp",
      period: "Jan 2012 – Apr 2012",
      links: [
        { text: "EN Version", url: "https://apps.apple.com/us/app/drugchecker-pregnancy-lactation/id516203684" },
        { text: "JA Version", url: "https://apps.apple.com/ph/app/ukkario-yaochekka-ren-fu-shou/id517177288" }
      ],
      description: "Search by active ingredient; shows effects on pregnant women per FDA standards.",
      details: [
        "Sole developer; supports iOS 4+. English/Japanese."
      ],
      tech: "macOS, Xcode, Objective-C, Core Data"
    }
  ]
};