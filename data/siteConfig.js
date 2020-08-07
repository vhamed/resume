module.exports = {
  siteTitle: "Hi! I'm Hamed!",
  siteDescription: `Hamed Resume`,
  keyWords: ['hamed', 'bensaad', 'resume', 'developer'],
  authorName: 'Hamed Bensaad',
  twitterUsername: 'vhamed7',
  githubUsername: 'vhamed',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Developer, interested in programming and everything in its orbit.<br />
  Fascinated by web development and building websites & apps.<br />
  I am always offering my full commitment whether open source or work projects.<br />
`,
  skills: [
    {
      name: 'Javascript, Html, Css, Php, Java',
      level: 70,
    },
    {
      name: 'React, Node, Laravel, Gatsby',
      level: 80,
    },
    {
      name: 'Sql, GraphQl',
      level: 70,
    },
    {
      name: 'Git',
      level: 70,
    },
  ],
  jobs: [
    {
      company: 'Free Lancer',
      begin: {
        month: 'july',
        year: '2020',
      },
      duration: null,
      occupation: '',
      description: 'Free Lancer',
    },
    {
      company: 'Master Degree Artificial Intelligence',
      begin: {
        month: 'july',
        year: '2018',
      },
      duration: '2 years',
      occupation: '',
      description: 'Univ of Mostefa Ben Boulaid',
    },
    {
      company: 'Licence Degree Computer Science',
      begin: {
        month: 'july',
        year: '2016',
      },
      duration: '3 years',
      occupation: '',
      description: 'Univ of Mostefa Ben Boulaid',
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
