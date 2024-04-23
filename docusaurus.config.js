// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Roy Russo - Blog",
  tagline: "Roy Russo - Blog and Site",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.royrusso.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "royrusso", // Usually your GitHub org/user name.
  projectName: "royrusso", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Set to true to enable docs
        //{
        //  sidebarPath: "./sidebars.js",
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        //  editUrl:
        //    "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //},
        blog: {
          routeBasePath: "/", // Serve the blog at the site's root
          showReadingTime: true,
          blogSidebarTitle: "Recent Posts",
          blogSidebarCount: 20,
          blogTitle: "",
          blogDescription: "",
          feedOptions: {
            type: "all",
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      defaultMode: "dark",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      disableSwitch: true,

      //      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Home",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          // commented out because we are not using docs
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          { to: "about", label: "About", position: "left" },
          {
            href: "https://github.com/royrusso",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: " ",
            items: [
              {
                label: "Github",
                href: "https://github.com/royrusso",
              },
              {
                label: "LinkedIn",
                href: "https://discordapp.com/invite/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Roy Russo. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "diff", "json"],
      },
    }),
};

export default config;
