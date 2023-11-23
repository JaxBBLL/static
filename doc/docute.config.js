new Docute({
  target: "docute",
  layout: "wide",
  cssVariables: {
    // headerBackground: "#42b983",
    // headerTextColor: "#fff",
    // highlightedLineBackground: "#7bd4da7a",
  },
  logo: `<img style="vertical-align:middle" src="./doc/logo.png" width="80" alt="@liusc/utils" title="@liusc/utils"/>`,
  title: "@liusc/utils",
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  sourcePath: "./",
  router: { mode: "hash" },
  // nav: [
  //   {
  //     title: "github",
  //     link: "https://github.com/JaxBBLL/utils",
  //   },
  // ],
  sidebar: [
    {
      title: "目录",
      link: "/",
    },
  ],
  footer: `
    <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
    &copy; ${new Date().getFullYear()} Developed by <a href="https://github.com/jaxbbll" target="_blank">JaxBBLL</a>.
    </div>
  `,
  banner: {
    template: ``,
  },
});
