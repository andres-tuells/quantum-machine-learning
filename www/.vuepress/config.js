module.exports = {
  title: 'The Craziest Project',
  description: 'The only way to be sane is to be mad.',
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
      md.use(require('markdown-it-container'), 'spoiler', {
        validate: function(params) {
          return params.trim().match(/^spoiler\s+(.*)$/);
        },
      
        render: function (tokens, idx) {
          console.log('RENDER SPOLIER');
          var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
      
          if (tokens[idx].nesting === 1) {
            // opening tag
            return '<details><summary>JOJOJO' + md.utils.escapeHtml(m[1]) + '</summary>\n';
      
          } else {
            // closing tag
            return '</details>\n';
          }
        }
      });
    }
  },
  head: [
    ['link', { rel: "icon", href: "/assets/img/infinite.png" }]
  ],
  themeConfig: {
    displayAllHeaders: true, // Default: false
    sidebar: 'auto',
    logo: "/assets/img/infinite.png",
    footer: "Ⓒ Andrés Tuells",
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Ghibli',
        items: [
          { text: 'Design', link: '/ghibli/design' },
          { text: 'Dashboard', link: '/ghibli/dashboard' },
          { text: 'Raspberry', link: '/ghibli/raspberry' },
          { text: 'ES8266', link: '/ghibli/es8266' },
          { text: 'Eyes', link: '/ghibli/eyes' },
          { text: 'Beziers Curves', link: '/ghibli/beziers' }
        ]
      },
      {
        text: 'Robotics',
        items: [
          { text: 'Project and Planning', link: '/robotics/'},
          { text: 'From Idea to Robotics', link: '/robotics/from-idea-to-robotics'}
        ]
      },
      {
        text: 'AI',
        items: [
          { text: 'Machine Learning', 
            items: [
              { text: 'Intro', link: '/ai/ml/'},
              { text: 'Random Forests in Deep', link: '/ai/ml/random-forest'}
            ]
          },
          {
            text: 'Deep Learning',
            items: [
              { text: 'Neural Networks', link: '/ai/dl/neural-networks'},
              { text: 'Reinforced Learning', link: '/ai/dl/reinforced-learning'}
            ]
          },
          { text: 'Math', link: '/ai/math/' }
        ]
      },
      {
        text: 'Electronics',
        items: [
          {
            text: 'Microcontrollers',
            items: [
              { text: 'AVR Programming', link: '/electronics/microcontrollers/avr-programming'},
              { text: 'ESP8266', link: '/electronics/microcontrollers/esp8266'}
            ]
          },
        ]
      },
      {
        text: 'Clown',
        items: [
          { text: '1000 Faces Hero', link: '/clown/1000-faces-hero' },
          { text: 'Costume', link: '/clown/costume' },
          { text: 'Inspirations', link: '/clown/inspirations' }
        ]
      },
      {
        text: 'Nihongo',
        items: [
          { text: 'Particles', link: '/nihongo/particles' },
        ]
      }
    ]
    
  }
}
