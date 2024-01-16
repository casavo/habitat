# Habitat - Casavo Design System Library

## 🚧🚧 v1.0 BETA - WORK IN PROGRESS 🚧🚧

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

You can check the [public Storybook](https://casavo.github.io/habitat) to test and experiment with the currently available components.

To sneak peek the incoming new features or components and participate in the discussions you can [visit the issue section](https://github.com/casavo/habitat/issues) of this repo, or you can checkout [the project's board](https://github.com/orgs/casavo/projects/20) to have a quick overview of the development status.

## Using Habitat in your project

> **HEADS UP!** currently you need to [add the Casavo private NPM registry token](https://github.com/casavo/community-of-practice/blob/master/frontend/best-practices/setup-project.md#package-registry), but we are planning to release this package as a public NPM one in the near future.

install the package in your project (_you can use whatever package manager you prefer_)

```bash
$ npm i @casavo/habitat
```

import the `style.css` and `HabitatTheme` global class and apply it to top level node of you application.

> **HEADS UP!** the `@casavo/habitat/style.css` file will also apply a global CSS reset/normalise, it is suggested to remove existing reset solutions.

```jsx
// src/pages/index.tsx - assuming it is a Next.js application
import Head from "next/head";
import { FC } from "react";

import "@casavo/habitat/style.css";
import { HabitatTheme } from "@casavo/habitat";

export default function Home(): FC => {
  return (
    <>
      <Head>
        <title>Next app + Habitat DS</title>
      </Head>
      <main id="app" className={HabitatTheme}>
        {children}
      </main>
    </>
  );
};
```

then import and use the components that you need in yout code

```jsx
// MyComponent.tsx
import { Button } from "@casavo/habitat";

export const MyComponent = (): FC => {
  const variant: string = "secondary";

  const doSomething = (): void => window.alert("button clicked!");

  return (
    <div>
      <Button variant={variant} onClick={doSomething} />
    </div>
  );
};
```

<!--
## 🚧🚧 WIP 🚧🚧 - How to override the base theme

1. get a new set of Design Tokens generated by Figma from the designers
2. TBD convert the file using the provided CLI
3. create new theme utility file in your project (for instance: `app/utils/theme.css.ts`)
4. add the following content

```typescript
// app/utils/theme.css.ts

// the theme creation utility of VE
import { createTheme } from "@vanilla-extract/css";
import { vars } from "@casavo/habitat";

// this is the file created in step 2
import tokens from "./project-tokens.json";

export const ProjectTheme = createTheme(vars, {
  color: tokens.colors,
});
```

5. similar to the previous chapter, apply the global class to the main project component but use the the class defined in the previous step

```typescript
// App.tsx
import Head from "next/head";
import { FC } from "react";

import "@casavo/habitat/style.css";
import { ProjectTheme } from "app/utils/theme.css.ts";

export default function Home(): FC => {
  return (
    <>
      <Head>
        <title>Next app + Habitat DS</title>
      </Head>
      <main id="app" className={ProjectTheme}>
        {children}
      </main>
    </>
  );
};
```

6. now you can use the components as usual but you will notice that they will be styled using the provided set of tokens
-->

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

> Before opening issues or pull requests plaese read our [code of conduct](CODE_OF_CONDUCT.md), then
> refer to the guidelines described in the "[Contributing](CONTRIBUTING.md)" section.

For information, requests, bug and inconsistencies alerts join the `#habitat-design-system` Slack channel.

## Updating the Design Tokens (WiP)

This library heavily relies on a set of Design Tokens defined in the Figma board. When the tokens changes on the source board, the designers exports a new `.json` file that the developers can integrate in the repo and use by following this steps:

1. copy the `.json` generated by Figma in the root folder of the project

   - if the file has the same name of the existing one just overwrite it
   - if the file name change delete the existing one and update the `source` value in the `dictionary.config.json` file

2. from the terminal execute `$ npm run update:tokens`
3. this will generate a new plain `.json` token file in the `src/utils` folder
4. commit the changes, push the code and create a new PR as described in the "[Contributing](CONTRIBUTING.md)" section

## (Very short) FAQ

> Why 1.0 `BETA`?

Because we prefered to release an initial version earlier and get actual feedbacks rather than spend some other months chasing an abstract concept of perfection to then realize we were doing something wrong.

> Is it possible to use Habitat in a Casavo project that is already using other styling solutions?

Yes, so far we did it in project that were using Emotion and Vanilla Extract with another theme and we never got any issue. So this opens the way to a progressive adoption in your existing project.

> How many Casavo projects are using it?

So far very few since we are still in "beta", ideally they will grow by the end of the year

- 2 new landing pages in `wine` (_Casavo B2C website_)
- `smp-frontend`

> Can I use this library in a non React or Node.js environment?

There is a related [discussion in the issue section](https://github.com/casavo/habitat/issues/27) of this repository.

> Which "parts" can be used as non-React stuff?

- the Design Tokens `.json` file
- the CSS reset applied in the `style.css` file

## License

Code is distributed under the [Apache 2.0](LICENSE), Casavo logo and brand are registered trademarks.
