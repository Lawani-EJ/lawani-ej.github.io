// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Lawani-EJ', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repositories',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Lawani-EJ/GOMYCODE-Python-Projects-', 'Lawani-EJ/Simple-Photo-WebApplication', 'Lawani-EJ/Hello-Python', 'Lawani-EJ/Rock-Paper-Scissors', 'Lawani-EJ/Todo-WebApplication', 'Lawani-EJ/Simple-Photo-WebApplication'],// List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Elyon John',
    description: 'Im a software developer based in Nigeria, 🌍',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: 'elyon_codes',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    tiktok: '',
    youtube: 'elyon-codes', // example: 'pewdiepie'
    udemy: 'lawani-elyon-john',
    dribbble: '',
    behance: '',
    medium: 'Lawani-Ej',
    dev: 'lawaniej',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://website-iota-one-15.vercel.app/',
    phone: '',
    email: 'lawanijohn70@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Next.js',
    'Git',
    'CSS',
    'Tailwind',
    'Python',
  ],
  
  experiences: [
  {
    company: 'GOMYCODE',
    position: 'Trainee, Python Developer',
    from: 'August 2024',
    to: 'November 2024',
    companyLink: 'https://gomycode.com/ng',
  },
  {
    company: 'REWORK ACADEMY',
    position: 'Trainee, Frontend Developer (React & Next.js)',
    from: 'January 2024',
    to: 'July 2024',
    companyLink: 'https://reworkacademy.co',
  },
  { 
    company: 'UPPERLINK Ltd (IT SIWES Internship)',
    position: 'Intern, Frontend Developer',
    from: 'February 2023',
    to: 'August 2023',
    companyLink: 'https://upperlink.ng',
  },
],
certifications: [
  {
    name: 'Python Essentials',
    body: 'This certificate verifies that Lawani Elyon John successfully completed the Python Essentials course on 21st September 2024 at GOMYCODE. The course included both in-person and online learning, validated by the student’s final completion.',
    year: 'September 2024',
    link: 'https://diploma.gomycode.app/?id=31726916414714850',
  },
  {
    name: 'Responsive Web Design',
    body: 'This certification covers the fundamentals of web development, focusing on HTML for content structure and CSS for styling webpages.',
    year: 'February 2024',
    link: 'https://www.freecodecamp.org/certification/Lawani-Elyon-John/responsive-web-design',
  },
],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Building Knowledge of Programming Languages',
      conferenceName: '',
      journalName: 'Medium',
      authors: 'Elyon John',
      link: 'https://medium.com/@Lawani-Ej/what-is-a-programming-language-91f61325e1c8',
      description:
        'Even while every programming language has a different syntax, one will discover that when you learn a language and then try to learn another, they all share a lot of concepts. ',
    },
    {
      title: 'Bibliology: Exploring the Integrity and History of the Bible: Insights from My Bibliology Class.',
      conferenceName: '',
      journalName: 'Medium',
      authors: 'Elyon John',
      link: 'https://medium.com/@Lawani-Ej/bibliology-exploring-the-integrity-and-history-of-the-bible-insights-from-my-bibliology-class-c409ec3fdd98',
      description:
        'The Bible is not just a historical document, but a message from God to humanity that challenges us to apply its teachings in our lives.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'lawaniej', // to hide blog section, keep it empty
    limit: 8, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
