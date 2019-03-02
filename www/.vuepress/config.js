module.exports = {
  title: 'QML',
  description: 'Quantum Machine Learning from Scratch.',
  lastUpdated: 'Last Updated', // string | boolean
  plugins: [
    'flowchart'
  ],
  markdown: {
    config: md => {
      let katex = require('katex');
      let TexMath = require('markdown-it-texmath');
      md.use(TexMath.use(katex), { delimiters: 'dollars', macros: { '\\RR': '\\mathbb{R}'}});
      md.use(require('markdown-it-footnote'));
      md.use(require('markdown-it-tasklist'));
      md.use(require('markdown-it-plantuml'));
      md.use(require('markdown-it-attrs'));
    }
  },
  head: [
    ['link', { rel: "icon", href: "/infinite.png" }]
  ],
  themeConfig: {
    displayAllHeaders: true, // Default: false
    sidebar: 'auto',
    logo: "/infinite.png",
    footer: "Ⓒ Andrés Tuells",
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Quantum Theory',
        items: [
          { text: 'Quantum Mechanics', link: '/theory/qm' },
          { text: 'Quantum Computation', link: '/theory/qm' },
          { text: 'Quantum Information', link: '/theory/qi' },
        ]
      },
      {
        text: 'Machine Learning',
        items: [
          { text: 'Project and Planning', link: '/robotics/'},
          { text: 'From Idea to Robotics', link: '/robotics/from-idea-to-robotics'}
        ]
      },
      {
        text: 'Programming', link: '/programming'
      },
      {
        text: 'Quantum Machine Learning', link: '/qml'
      },
      {
        text: 'Github', link: 'https://github.com/andres-tuells/quantum-machine-learning'
      },
    ]
    
  }
}
