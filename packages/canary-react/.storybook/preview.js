import "../dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "../dist/core/core.css";

export const parameters = {
    controls: { 
        matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true
    },
    viewMode: "docs",
    previewTabs: {
      "storybook/docs/panel": { title: "Documentation" },
      canvas: { title: "Live example" },
    },
  }