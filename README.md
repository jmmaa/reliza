# Typescript Package Template

This repository provides a minimal and robust template for getting started on your own pure Typescript package. It is barebones and uses Typescript CLI as its build tool.

You can also use this template for simply learning how to get started on making your own Typescript package.

## Get Started

Let's say I want to make a package named "my-cool-package"

Create a new [repo](https://github.com/jmmaa/typescript-package-template/generate) or clone this
```
git clone https://github.com/jmmaa/typescript-package-template.git my-cool-package
```

Specify project details

```js
// package.json

{
    "name": "my-cool-package",
    ...
}
```

Then run

```
npm install
npm run build
```

Test if everything is working properly

```
npm test
```

If you're developing

```
npm run dev
```

## Test Your Package Locally (Optional)

By default, the template is only capable of testing your package by importing your generated library code from `/lib` to the `/tests` directory. This is for fast development process.

If you want to test your package as if you're the consumer

Build the package tarball
```
npm run build
```
Install the package locally from the tarball
```
npm install -D file:build/my-cool-package-0.0.1.tgz
```
> **Note**: you can find the package tarball inside the `/build` folder after runnning `npm run build`

Now you can import your package using its name!

```typescript
import { add, mul } from "my-cool-package";

test("build", () => {
  expect(add(1, 2, 3)).toEqual(6);
  expect(mul(4, 5, 6)).toEqual(120);
});
```
The local package is decoupled from the project, so you will need to install it again to reflect the changes you've made
```
npm install my-cool-package
```

## References

- [Typescript Docs](https://www.typescriptlang.org/docs)
- [Typescript Deep Dive](https://basarat.gitbook.io/typescript/library)
- [How to Test a Node (npm) Package Locally](https://javascript.plainenglish.io/how-to-test-a-node-package-locally-8dde33e642df)
- [How to configure Jest with TypeScript](https://swizec.com/blog/how-to-configure-jest-with-typescript/)
