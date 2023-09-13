# Habitat - Casavo Design System Library

## 🚧🚧 WORK IN PROGRESS 🚧🚧

> Welcome to the Casavo design system repository! This is where you can find all the components, guidelines and resources to create amazing user experiences for Casavo. Whether you are a developer, a designer or a product manager, you will find everything you need to get started. Explore the repository and have fun!

![docs/images/meme.png](docs/images/meme.png)

## Design first

This project is a design driven project, which means we care a lot about the user experience and the aesthetics of our product. We want to create something that is beautiful, functional and easy to use.

Everything in this codebase is a reflection of what has been defined on the related [Figma board](https://www.figma.com/file/0vYcLbHGHFIJ44hFI45WQJ/%F0%9F%9A%80-Habitat?type=design).

## Built on top of

- [React](https://react.dev/) + [Typescript](https://www.typescriptlang.org/) - the library for web and native user interfaces
- [Vanilla Extract](https://vanilla-extract.style/) / Emotion - zero-runtime stylesheets in typeScript
- [Storybook](https://storybook.js.org/) - frontend workshop for building UI components and pages in isolation
- [Vite.js](https://vitejs.dev/) - next Generation Frontend Tooling

## What's included?

Brief checklist of the component that will be included in the project:

- Typography
  - `<Display />`, `<H1 />`, `<H2 />`, `<H3 />`, `<H4 />` will represent the matching entities
  - `<Body />` will act as counterpart of `BodyL` and `BodyM`
  - `Description`, `Caption` and `Small` are still under discussion
  - `<List />`
- UI Components
  - `<Button />`
  - `<Badge />`
  - `<TextLink />` ??
  - `<Navbar />`
  - `<Link />`
  - `<Switch />`
  - `<Tags />`
  - `<Toast />`
- Form components
  - `<Input />`
  - `<Checkbox />`
  - `<Radio />`
  - `<Alert />`
  - `<Chip />`
- Utilities
  - media queries
  - design tokens

## Local development

Clone the repo and cd into it

```bash
$ git clone git@github.com:casavo/habitat.git
$ cd habitat
```

install the NPM dependencies

```bash
$ npm ci
```

start the Storybook development server

```bash
$ npm run dev
```

the Storybook instance will automatically open in your browser at `http://localhost:6006/`.

Please refert to the [docs](docs/development.md) for in depth info on how to work locally.

## How to participate?

Before opening issues or pull requests plaese read our [code of conduct](CODE_OF_CONDUCT.md), then
refer to the guidelines described in the "[Contributing](CONTRIBUTING.md)" section.

For information, requests, bug and inconsistencies alerts join the `#habitat-design-system` Slack channel.

## License

Code is distributed under the [MIT license](LICENSE), Casavo logo and brand are registered trademarks.
