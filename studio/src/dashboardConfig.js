export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61014dba9ab169eb3049f88f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f8bfsx56",
                  apiId: "51563e37-5083-4c92-bf77-10fff00eb17c",
                },
                {
                  buildHookId: "61014dbaf455f3e69cf27b6f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-q9jwfttt",
                  apiId: "e1441e82-d253-4c91-9ad6-612725930d27",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/WyshfulThinking/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-q9jwfttt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
