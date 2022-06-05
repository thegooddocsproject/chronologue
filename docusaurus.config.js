// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chronologue Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://chronologue.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chronologue',
        logo: {
          alt: 'Doctopus mascot',
          src: 'img/logo.svg',
        },
        items: [
      
          {to: '/docs/chronologue', label: 'User Documentation', position: 'left'},
          {to: '/docs/API', label: 'API Documentation', position: 'left'},
          {
            href: 'https://github.com/thegooddocsproject/chronologue',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Documentation',
                to: '/docs/chronologue',
              },
              {
                label: 'API Documentation',
                to: '/docs/API',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'The Good Docs Project',
                to: 'https://thegooddocsproject.dev/',
              },
              {
                label: 'Chronologue on GitHub',
                href: 'https://github.com/thegooddocsproject/chronologue',
              },
              {
                label: '#chronologue-docs on Slack',
                href: 'https://thegooddocs.slack.com/',
              },
              {
                label: 'The Good Docs Twitter',
                href: 'https://twitter.com/thegooddocs',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chronologue powered by The Good Docs Project.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
