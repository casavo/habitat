# Contributing to Habitat

### Coding guidelines

> ⚠️ **this project uses the `main` branch as a primary one instead of `master`!** ⚠️

- be sure to checkout the shared conventions defined in the [CoP guidelines](https://github.com/casavo/community-of-practice/
- always aim for the simpler and most effective solution and then iterate on making it more elegant, over-engineering from the start will rarely give you any advantage
- styles are defined using [Vanilla Extract](https://vanilla-extract.style/)
  - for complex/dynamic classes take a look at [Recipes](https://vanilla-extract.style/documentation/packages/recipes/)
  - in-line styles should only be considered as a last resort
- new components that extends native HTML elements **must** be built on top of the [react-aria](https://react-spectrum.adobe.com/react-aria/) package
- being low level components, the resulting `HTML` code must be the most semantic as possible
  - always refer to the [official HTML tags reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  - generic tags like `<div>` and `<span>` should be always used as a last resort
- this repo is shared between different teams, before adding a new NPM package, double check if its really necessary:
  - if the same result can be obtained in few lines of JS code, avoid adding extra packages
  - if the package is really proving to be time-saver, please detail the use case in the PR
  - when in doubt, you can always ask in the `#cop-frontend` Slack channel
- lets try to keep the dependencies updated on the go rather than bulk update everything every 1-2 years:
  - you can use `npm-check` utility to discover updated packages
  - beside the type of dependency update (patch, minor, major) always run the build and test process to have a first feedback about possible breaking functionality
  - if the dependencies updates works without issues just commit them, otherwise feel free to revert the change and [open an issue](https://github.com/casavo/habitat/issues/new) to warn other devs about breaking updates

### How to use theme values

When developing an Habitat component you must always give priority to the current theme values for defining colors, spacing and mediaqueries.

To use them just import the `vars` helper from the utils folder and get the desired value, for instance:

```typescript
// component.css.ts
import { style } from "@vanilla-extract/css"
import { vars } from "@/utils/theme.css"

export const container = style({
  backgroundColor: vars.colors.root.orange[500]
  "@media": {
    [vars.mq.desktop]: {
      backgroundColor: vars.colors.root.darkgreen[400]
    },
  },
})
```

in the above example you have created a class that applies a different background color based on the resolution without specifying an hard-coded value.

This allows consumer of the library to overwrite the values of theme without the need of editing the components source file.

### What categories of values are exposed through `vars`?

| Properties | Tokens key | 
|--|--|
| CSS media queris | `vars.mq` |
| Casavo brand colors | `vars.colors` |
| Spacing | `vars.space` |
| Border radius | `vars.corners` | 

When writing a new component and reviewing a PR in Habitat, these values **must be enforced** in the codebase.

### How to create a Component

- create a folder and assign it the name of the component you want to create within `src/components`. Es. Badge folder.
- inside the new folder create 3 files:
  - `index.ts` it is used for export the component.
  - `YourComponent.tsx` (_replace YourComponent with the name of component that you want create_) it is used to create the component. Please check the coding guidelines.
  - `YourComponent.css.ts` (_replace YourComponent with the name of component that you want create_) it is used to create the style component with vanilla extract.
- add new story in Storybook in the `src/stories` folder
  - as naming pattern `[category][name].stories.tsx`
  - if it is a documentation-only page, consider using the `.mdx` format
  - document every exposed property
  - don't use custom handler for the events, follow Storybook's guidelines
  - in the body of your story, wrap everything within the `<StoryLayout />` component

### `<StoryLayout />` quick docs

It's a simple component that defines a standard layout for every story, both components and documentational, and imports Habitat style + default theme. Code example sections are rendered throught [Storybook's `<Source />` component](https://storybook.js.org/docs/react/api/doc-block-source).

```tsx
import { StoryLayout } from "./components/StoryLayout";
```

| **prop**    | **required** | **type**          | **description**                                  |
| ----------- | ------------ | ----------------- | ------------------------------------------------ |
| title       | `true`       | `string`          | heading of the page                              |
| description | `false`      | `string` or `JSX` | quick explanation of the component or intro text |
| isComponent | `false`      | `boolean`         | if you need to display the component doc layout  |
| language    | `false`      | `string`          | code highlighting language                       |
| importLine  | `false`      | `string`          | code example of the import                       |
| usage       | `false`      | `string`          | code example of the component basic usage        |

### How to request changes to the Design System

- join the `#design-system-taskforce` channel on Slack
- explain your proposal using one of the following templates: **TBD**
- you can check the designer proposal workflow from this [Miro board](https://miro.com/app/board/uXjVMYRtpog=/?moveToWidget=3458764554126497351&cot=14&share_link_id=980567127227)

### How to submit code changes

- clone the repository
- create a branch for the intended changes
  - please use suffixes like `feature/[branch-name]` or `fix/[branch-name]` to help us identify the type of change that you intend to submit
- work on your code
- commit and push the branch
  - commits should be as small as possible
  - PR with too many changes/files in 1 commit will be discarded withour review
- create a PR
  - assign it to yourself
  - add related labels
  - add 3 Casavo devs as reviewers
- if the feature/fix involves visual changes you also need to ask for validation to the designer on the `#design-system-taskforce` Slack channel
- participate on the feedback loop of your PR
- once everything is OK 🟢 the PR will automatically be merged to master

## How to release a new version of Habitat

### Generate a preview Storybook for fix/feature branches

Code pushed on any `branch` of this repo will trigger a new Storybook build that will be pushed to [Chromatic](https://www.chromatic.com/builds?appId=6492c41db7cb00cf0539e3b6). You can preview the changes and check the related Storybook from the Chromatic dashboard.

### Update the public Storybook

Any update on the `main` branch (_that should be done through PRs_) will trigger an update to the main public Storybook visible at [casavo.github.io/habitat](https://casavo.github.io/habitat/).

### Publish a new NPM release

To publish a new version of the package to the Casavo NPM registry, [create a new Github Release](https://github.com/casavo/habitat/releases/new) containing:

- the new tag version (_it should match the `version` key of the `package.json` file_)
- the name of the release (_99% of the cases it will be the tag version_)
- the release notes
  - use the _"generate release notes"_ button to summarize the changes
  - eventually add some manual notes if its required
