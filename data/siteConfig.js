module.exports = {
  siteTitle: "Hi! I'm Hamed Bensaad!",
  siteDescription: `Hamed Resume`,
  keyWords: ['hamed', 'bensaad', 'resume', 'developer', 'fullstack'],
  authorName: 'Hamed Bensaad',
  twitterUsername: 'vhamed7',
  githubUsername: 'vhamed',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Developer, interested in programming and everything in its orbit.<br />
  Fascinated by web development and building websites & apps.<br />
  I am always offering my full commitment whether open source or work projects.<br />
  I mainly work with <b>Javascript, Node, React</b>
`,
  skills: [
    {
      name: 'Javascript, Php, Java, Html, Css',
      level: 70,
    },
    {
      name: 'React, Node, Laravel, NextJs, Gatsby',
      level: 80,
    },
    {
      name: 'Sql, GraphQl',
      level: 70,
    },
    {
      name: 'Git, Electron',
      level: 90,
    },
  ],
  timeline: [
    {
      company: 'Isefka',
      begin: {
        month: 'Dec',
        year: '2020',
      },
      duration: null,
      occupation: '',
      description: 'FullStack Developer (NextJS, Node, React)',
    },
    {
      company: 'Ignis IT',
      begin: {
        month: 'dec',
        year: '2019',
      },
      duration: '1 year',
      occupation: '',
      description: 'FullStack Developer (Node, React)',
    },
    {
      company: 'Symetricom',
      begin: {
        month: 'july',
        year: '2018',
      },
      duration: '5 months',
      occupation: '',
      description: 'Frontend Developer (React)',
    },
    {
      company: 'Master Degree',
      begin: {
        month: 'july',
        year: '2018',
      },
      duration: '2 years',
      occupation: '',
      description: 'Artificial Intelligence',
    },
    {
      company: 'Licence Degree',
      begin: {
        month: 'july',
        year: '2016',
      },
      duration: '3 years',
      occupation: '',
      description: 'Computer Science',
    },
    {
      company: 'Backelor Degree Mathematics',
      begin: {
        month: 'juin',
        year: '2013',
      },
      duration: '1 year',
      occupation: '',
      description: 'Ali Nmer High School',
    },
  ],
  education: [
    {
      company: 'Master Degree',
      begin: {
        month: 'july',
        year: '2018',
      },
      duration: '2 years',
      occupation: '',
      description: 'Artificial Intelligence',
    },
    {
      company: 'Licence Degree',
      begin: {
        month: 'july',
        year: '2016',
      },
      duration: '3 years',
      occupation: '',
      description: 'Computer Science',
    },
    {
      company: 'Backelor Degree Mathematics',
      begin: {
        month: 'juin',
        year: '2013',
      },
      duration: '1 year',
      occupation: '',
      description: 'Ali Nmer High School',
    },
  ],
  jobs: [
    {
      company: 'Ikalas',
      begin: {
        month: 'Dec',
        year: '2020',
      },
      duration: null,
      occupation: '',
      description: 'FullStack Developer',
    },
    {
      company: 'Ignis IT',
      begin: {
        month: 'dec',
        year: '2019',
      },
      duration: '1 year',
      occupation: '',
      description: 'Developer',
    },
    {
      company: 'Symetricom',
      begin: {
        month: 'july',
        year: '2018',
      },
      duration: '5 months',
      occupation: '',
      description: 'Developer',
    },
  ],
  projects: [
    {
      name: 'Symétricom',
      description: 'Agence de Publicité',
      demo: 'http://symetricom.com/',
      updated_at: new Date().toISOString(),
    },
    {
      name: 'Talya Media',
      description: "Site d'informations",
      demo: 'http://talya-media.com/',
      updated_at: new Date().toISOString(),
    },
    {
      name: 'Gestionnaire de Parfumerie',
      description: 'Electron App',
      demo: 'https://friendly-hopper-55e8dc.netlify.app/#/',
      updated_at: new Date().toISOString(),
    },
    {
      name: 'Expert Informatique',
      description: 'Site Ecommerce',
      demo: 'https://affectionate-allen-c1b2a4.netlify.app/',
      updated_at: new Date().toISOString(),
    },
    {
      name: 'Rtl News Magazine',
      description: 'Template',
      demo: 'https://confident-wilson-ff8d41.netlify.app/',
      updated_at: new Date().toISOString(),
    },
  ],
  portifolio: [
    {
      image: '/images/gatsby-starter-cv.png',
      description: 'Gatsby starter CV template',
      url:
        'https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/',
    },
    {
      image: '/images/awesome-grid.png',
      description: 'Responsive grid for ReactJS',
      url: 'https://github.com/santosfrancisco/react-awesome-styled-grid',
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/vhamed7',
    linkedin: 'https://www.linkedin.com/in/vhamed',
    github: 'https://github.com/vhamed',
    gitlab: 'https://gitlab.com/vhamed',
    email: 'hamed.abdesselam7@yahoo.com',
  },
  siteUrl: 'https://vhamed.github.io/resume',
  pathPrefix: '/resume', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
  ],
}
