// .storybook/main.js

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {
          presets: [
            "@babel/preset-env",
            {
              targets: {
                ie: "11",
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
              },
              useBuiltIns: "usage",
            },
          ],
        },
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds",
    "@storybook/addon-toolbars",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
  ],
};
