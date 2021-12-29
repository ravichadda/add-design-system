
# Welcome! 👋

MyAdd Design System provides guidelines and tools to help anyone make MyAdd's contributions more cohesive and to build plugins more efficiently.

## Installation

Install MyAdd Design System and its peer dependencies:

```sh
$ yarn add @add/design-system @add/icons styled-components react-router-dom

# or

$ npm i @add/design-system @add/icons styled-components react-router-dom
```

## Usage

Wrap your application with the `ThemeProvider` and pass the default `lightTheme` provided by `@add/design-system`.

```jsx
import { ThemeProvider } from "@add/design-system/ThemeProvider";
import { lightTheme } from "@add/design-system/themes";

function App({ children }) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}

export default App;
```

## Testing a specific branch

Make sure to have the project already cloned (see previous point). Then, run the following commands:

```sh
# Inside the folder
$ git checkout BRANCH_NAME # BRANCH_NAME concerns the modifications to tests
$ yarn setup # reinstall dependencies & prepare lerna packages
```

If you encounter problems doing so, run the following command and retry the previous one:

```sh
$ git reset --hard
```
