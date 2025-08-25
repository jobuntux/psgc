import { defineConfig } from "vitepress";

export default defineConfig({
  title: "@jobuntux/psgc",
  titleTemplate: ":title · @jobuntux/psgc",
  description: "Philippine Standard Geographic Code (PSGC) for JavaScript/TypeScript",
  head: [["link", { rel: "icon", href: "/psgc/vite.svg" }]],
  base: "/psgc/",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/installation" },
      { text: "Examples", link: "/examples/react" },
      { text: "Changelog", link: "/dev/changelog" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Installation", link: "/guide/installation" },
            { text: "Usage", link: "/guide/usage" },
            { text: "Notes", link: "/guide/notes" },
            { text: "FAQ", link: "/guide/faq" },
          ],
        },
      ],
      "/examples/": [
        {
          text: "Examples",
          items: [
            { text: "React", link: "/examples/react" },
            { text: "Vue", link: "/examples/vue" },
            { text: "Svelte", link: "/examples/svelte" },
          ],
        },
      ],
      "/dev/": [
        {
          text: "Development",
          items: [
            { text: "Changelogs", link: "/dev/changelog" },
            { text: "Dev Notes", link: "/dev/notes" },
            { text: "Issues Roadmap", link: "/dev/issues" },
            { text: "Tests", link: "/dev/tests" },
            { text: "Contributing", link: "/dev/contributing" },
          ],
        },
      ],
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/jobuntux/psgc/blob/main/LICENSE" target="_blank">MIT License</a>.',
      copyright: '© 2025 <a href="https://github.com/jobuntux" target="_blank">Jobuntux</a>',
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/jobuntux/psgc" },
      { icon: "npm", link: "https://www.npmjs.com/package/@jobuntux/psgc" },
    ],
  },
});
