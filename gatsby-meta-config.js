module.exports = {
  title: `jman.blog`,
  description: `데이터 분석가 jman`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://jman3.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `jman3/jman3.github.io`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `jman`,
    bio: {
      role: `데이터분석가`,
      description: ['경험하고 성장하는', '성과를 만드는', '문제를 해결하는'],
      thumbnail: 'jman.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/jman3 `, 
      linkedIn: `https://www.linkedin.com `, 
      email: `new1726@gmail.com `, // `new1726@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2024.06 ~',
        activity: '개인 블로그 운영 시작',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '프로젝트명',
        description:
          '프로젝트 내용',
        techStack: ['tech stack 1', 'tech stack 2'],
        thumbnailUrl: 'blog.png',
      },
    ],
  },
};
