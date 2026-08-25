# Blog Customizer

Blog Customizer is a React application with a settings panel that allows the user to change the appearance of an article.

The main task in the project was to keep the form state separate from the settings currently applied to the page. Changes are previewed in the form and applied only after the user confirms them.

## Features

- collapsible settings panel;
- article style customization;
- separate form and applied state;
- reset to initial settings;
- CSS-variable-based styling;
- click-outside behavior for closing the panel.

## Tech stack

- React
- TypeScript
- SCSS
- Webpack
- Storybook
- ESLint
- Stylelint
- Prettier

## Getting started

```bash
git clone https://github.com/person5494/blog-customizer.git
cd blog-customizer
npm install
npm start
```

Storybook can be started separately:

```bash
npm run storybook
```

## Useful commands

```bash
npm start
npm run build
npm run lint
npm run stylelint
npm run storybook
```

## About the project

This project was completed as part of the Yandex Practicum Frontend Developer course. The initial project contained the basic components and styling setup; my work focused on implementing the settings form behavior and connecting it to the article appearance.
