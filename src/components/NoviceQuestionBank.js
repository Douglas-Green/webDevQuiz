/** @format */

const NoviceQuestionBank = [
  {
    question: "What is the purpose of React's context API?",
    options: [
      "To manage global state",
      "To pass data to child components without prop drilling",
      "To store a reference to a DOM node",
      "To trigger a re-render of a component",
    ],
    correctAnswer: "To pass data to child components without prop drilling",
    area: "React",
  },
  {
    question:
      "What is the difference between a controlled and an uncontrolled component in React?",
    options: [
      "A controlled component has state, an uncontrolled component does not",
      "A controlled component cannot be updated, an uncontrolled component can",
      "A controlled component's value is handled by React state, an uncontrolled component's value is handled by the DOM",
      "A controlled component can accept props, an uncontrolled component cannot",
    ],
    correctAnswer:
      "A controlled component's value is handled by React state, an uncontrolled component's value is handled by the DOM",
    area: "React",
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    options: [
      "To manage state",
      "To perform side effects in function components",
      "To pass data between components",
      "To store a reference to a DOM node",
    ],
    correctAnswer: "To perform side effects in function components",
    area: "React",
  },

  {
    question: "What is a higher order component in React?",
    options: [
      "A component that operates on other components and returns a new component",
      "A component that accepts props and state",
      "A component that renders other components",
      "A component that has state",
    ],
    correctAnswer:
      "A component that operates on other components and returns a new component",
    area: "React",
  },
  {
    question: "What is the purpose of the key prop in React?",
    options: [
      "To identify components in the virtual DOM",
      "To trigger a re-render of a component",
      "To pass data to a component",
      "To specify the type of a component",
    ],
    correctAnswer: "To identify components in the virtual DOM",
    area: "React",
  },
  {
    question: "What is the use of refs in React?",
    options: [
      "To store a reference to a DOM node or an instance of a component",
      "To trigger a re-render of a component",
      "To pass data between components",
      "To specify the type of a component",
    ],
    correctAnswer:
      "To store a reference to a DOM node or an instance of a component",
    area: "React",
  },
  {
    question: "What is the primary purpose of the `useEffect` hook in React?",
    options: [
      "To handle side effects in functional components",
      "To manage state in functional components",
      "To optimize performance in functional components",
      "To handle errors in functional components",
    ],
    correctAnswer: "To handle side effects in functional components",
    area: "React",
  },

  {
    question:
      "What is the difference between a controlled and uncontrolled component in React?",
    options: [
      "A controlled component is controlled by the state, while an uncontrolled component is not",
      "A controlled component is uncontrolled by the state, while an uncontrolled component is controlled",
      "A controlled component is used for forms, while an uncontrolled component is used for display",
      "A controlled component is used for display, while an uncontrolled component is used for forms",
    ],
    correctAnswer:
      "A controlled component is controlled by the state, while an uncontrolled component is not",
    area: "React",
  },

  {
    question:
      "What is the purpose of the `key` prop in React when rendering a list of components?",
    options: [
      "To specify the order of the components",
      "To specify the type of the components",
      "To help React keep track of the components and improve performance",
      "To pass additional data to the components",
    ],
    correctAnswer:
      "To help React keep track of the components and improve performance",
    area: "React",
  },

  {
    question:
      "What is the difference between the `useState` and `useReducer` hooks in React?",
    options: [
      "useState is for simple state management, while useReducer is for complex state management",
      "useState is for complex state management, while useReducer is for simple state management",
      "useState is for functional components, while useReducer is for class components",
      "useState is for class components, while useReducer is for functional components",
    ],
    correctAnswer:
      "useState is for simple state management, while useReducer is for complex state management",
    area: "React",
  },

  {
    question:
      "What is the purpose of the `shouldComponentUpdate` method in React?",
    options: [
      "To optimize performance by skipping unnecessary re-renders",
      "To force a re-render of the component",
      "To prevent a re-render of the component",
      "To handle errors in the component",
    ],
    correctAnswer: "To optimize performance by skipping unnecessary re-renders",
    area: "React",
  },
  {
    question:
      "What is the difference between the `==` and `===` operators in JavaScript?",
    options: [
      "The `==` operator checks for value equality, while the `===` operator checks for type and value equality",
      "The `==` operator checks for type and value equality, while the `===` operator checks for value equality",
      "The `==` operator is used for strings, while the `===` operator is used for numbers",
      "The `==` operator is used for numbers, while the `===` operator is used for strings",
    ],
    correctAnswer:
      "The `==` operator checks for value equality, while the `===` operator checks for type and value equality",
    area: "JavaScript",
  },

  {
    question: "What is the purpose of the `bind` method in JavaScript?",
    options: [
      "To change the context of a function",
      "To change the arguments of a function",
      "To change the return value of a function",
      "To create a new function",
    ],
    correctAnswer: "To change the context of a function",
    area: "JavaScript",
  },

  {
    question:
      "What is the difference between a `var` and `let` declaration in JavaScript?",
    options: [
      "A `var` declaration is block-scoped, while a `let` declaration is function-scoped",
      "A `var` declaration is function-scoped, while a `let` declaration is block-scoped",
      "A `var` declaration is used for global variables, while a `let` declaration is used for local variables",
      "A `var` declaration is used for local variables, while a `let` declaration is used for global variables",
    ],
    correctAnswer:
      "A `var` declaration is function-scoped, while a `let` declaration is block-scoped",
    area: "JavaScript",
  },

  {
    question: "What is the purpose of the `closure` concept in JavaScript?",
    options: [
      "To create a new scope",
      "To preserve the outer scope",
      "To create a new function",
      "To optimize performance",
    ],
    correctAnswer: "To preserve the outer scope",
    area: "JavaScript",
  },

  {
    question:
      "What is the difference between the `map` and `forEach` methods in JavaScript?",
    options: [
      "The `map` method returns a new array, while the `forEach` method returns undefined",
      "The `map` method returns undefined, while the `forEach` method returns a new array",
      "The `map` method is used for objects, while the `forEach` method is used for arrays",
      "The `map` method is used for arrays, while the `forEach` method is used for objects",
    ],
    correctAnswer:
      "The `map` method returns a new array, while the `forEach` method returns undefined",
    area: "JavaScript",
  },
  {
    question:
      "What is the purpose of the `Object.create()` method in JavaScript?",
    options: [
      "To create a new object from a prototype",
      "To create a new object from a constructor",
      "To clone an existing object",
      "To merge two objects",
    ],
    correctAnswer: "To create a new object from a prototype",
    area: "JavaScript",
  },

  {
    question:
      "What is the difference between the `null` and `undefined` values in JavaScript?",
    options: [
      "null is an object, while undefined is a primitive value",
      "null is a primitive value, while undefined is an object",
      "null represents an empty object, while undefined represents an uninitialized variable",
      "null represents an uninitialized variable, while undefined represents an empty object",
    ],
    correctAnswer:
      "null is a primitive value, while undefined is a primitive value",
    area: "JavaScript",
  },

  {
    question: "What is the purpose of the `Promise` constructor in JavaScript?",
    options: [
      "To handle synchronous errors",
      "To handle asynchronous errors",
      "To create a new callback function",
      "To create a new timer",
    ],
    correctAnswer: "To handle asynchronous errors",
    area: "JavaScript",
  },

  {
    question:
      "What is the difference between the `async/await` syntax and traditional callbacks in JavaScript?",
    options: [
      "Async/await is used for synchronous code, while callbacks are used for asynchronous code",
      "Async/await is used for asynchronous code, while callbacks are used for synchronous code",
      "Async/await is used for error handling, while callbacks are used for success handling",
      "Async/await is used for success handling, while callbacks are used for error handling",
    ],
    correctAnswer:
      "Async/await is used for asynchronous code, while callbacks are used for asynchronous code",
    area: "JavaScript",
  },

  {
    question: "What is the purpose of the `Proxy` object in JavaScript?",
    options: [
      "To create a new object with additional properties",
      "To create a new object with additional methods",
      "To intercept and modify the behavior of an existing object",
      "To clone an existing object",
    ],
    correctAnswer: "To intercept and modify the behavior of an existing object",
    area: "JavaScript",
  },
  {
    question: "What is the purpose of the `<header>` element in HTML?",
    options: [
      "To define the footer of a webpage",
      "To define the header of a webpage",
      "To define the navigation menu of a webpage",
      "To define the main content of a webpage",
    ],
    correctAnswer: "To define the header of a webpage",
    area: "HTML",
  },

  {
    question:
      "What is the difference between the `<span>` and `<div>` elements in HTML?",
    options: [
      "The `<span>` element is used for block-level elements, while the `<div>` element is used for inline elements",
      "The `<span>` element is used for inline elements, while the `<div>` element is used for block-level elements",
      "The `<span>` element is used for grouping elements, while the `<div>` element is used for styling purposes",
      "The `<span>` element is used for styling purposes, while the `<div>` element is used for grouping elements",
    ],
    correctAnswer:
      "The `<span>` element is used for inline elements, while the `<div>` element is used for block-level elements",
    area: "HTML",
  },

  {
    question: "What is the purpose of the `aria-*` attributes in HTML?",
    options: [
      "To provide accessibility information for screen readers",
      "To provide styling information for browsers",
      "To provide semantic meaning to HTML elements",
      "To provide animation effects to HTML elements",
    ],
    correctAnswer: "To provide accessibility information for screen readers",
    area: "HTML",
  },
  {
    question: "What is the purpose of the `<header>` element in HTML?",
    options: [
      "To define the footer of a webpage",
      "To define the header of a webpage",
      "To define the navigation menu of a webpage",
      "To define the main content of a webpage",
    ],
    correctAnswer: "To define the header of a webpage",
    area: "HTML",
  },

  {
    question:
      "What is the difference between the `<span>` and `<div>` elements in HTML?",
    options: [
      "The `<span>` element is used for block-level elements, while the `<div>` element is used for inline elements",
      "The `<span>` element is used for inline elements, while the `<div>` element is used for block-level elements",
      "The `<span>` element is used for grouping elements, while the `<div>` element is used for styling purposes",
      "The `<span>` element is used for styling purposes, while the `<div>` element is used for grouping elements",
    ],
    correctAnswer:
      "The `<span>` element is used for inline elements, while the `<div>` element is used for block-level elements",
    area: "HTML",
  },

  {
    question: "What is the purpose of the `aria-*` attributes in HTML?",
    options: [
      "To provide accessibility information for screen readers",
      "To provide styling information for browsers",
      "To provide semantic meaning to HTML elements",
      "To provide animation effects to HTML elements",
    ],
    correctAnswer: "To provide accessibility information for screen readers",
    area: "HTML",
  },
  {
    question: "What is the purpose of the `<label>` element in HTML?",
    options: [
      "To define a heading",
      "To define a paragraph",
      "To associate a text description with a form control",
      "To create a hyperlink",
    ],
    correctAnswer: "To associate a text description with a form control",
    area: "HTML",
  },

  {
    question:
      "What is the difference between the `<img>` and `<picture>` elements in HTML?",
    options: [
      "The `<img>` element is used for vector graphics, while the `<picture>` element is used for raster graphics",
      "The `<img>` element is used for raster graphics, while the `<picture>` element is used for vector graphics",
      "The `<img>` element is used for a single image source, while the `<picture>` element is used for multiple image sources",
      "The `<img>` element is used for multiple image sources, while the `<picture>` element is used for a single image source",
    ],
    correctAnswer:
      "The `<img>` element is used for a single image source, while the `<picture>` element is used for multiple image sources",
    area: "HTML",
  },

  {
    question: "What is the purpose of the `aria-live` attribute in HTML?",
    options: [
      "To indicate that a region of the page has changed and should be announced by screen readers",
      "To indicate that a region of the page is static and should not be announced by screen readers",
      "To indicate that a region of the page is a navigation menu",
      "To indicate that a region of the page is a footer",
    ],
    correctAnswer:
      "To indicate that a region of the page has changed and should be announced by screen readers",
    area: "HTML",
  },

  {
    question:
      "What is the difference between the `<table>` and `<datagrid>` elements in HTML?",
    options: [
      "The `<table>` element is used for tabular data, while the `<datagrid>` element is used for hierarchical data",
      "The `<table>` element is used for hierarchical data, while the `<datagrid>` element is used for tabular data",
      "The `<table>` element is used for simple tables, while the `<datagrid>` element is used for complex tables",
      "The `<table>` element is used for complex tables, while the `<datagrid>` element is used for simple tables",
    ],
    correctAnswer:
      "The `<table>` element is used for tabular data, while the `<datagrid>` element is not a valid HTML element",
    area: "HTML",
  },

  {
    question: "What is the purpose of the `placeholder` attribute in HTML?",
    options: [
      "To specify a default value for a form control",
      "To specify a tooltip for a form control",
      "To specify a label for a form control",
      "To specify a validation pattern for a form control",
    ],
    correctAnswer: "To specify a hint or example value for a form control",
    area: "HTML",
  },
  {
    question: "What is the purpose of the `box-sizing` property in CSS?",
    options: [
      "To control the layout of flexbox containers",
      "To control the layout of grid containers",
      "To include or exclude the padding and border in the width and height of an element",
      "To control the text alignment of an element",
    ],
    correctAnswer:
      "To include or exclude the padding and border in the width and height of an element",
    area: "CSS",
  },

  {
    question:
      "What is the difference between the `position: relative` and `position: absolute` properties in CSS?",
    options: [
      "The `position: relative` property positions an element relative to its parent, while the `position: absolute` property positions an element relative to the viewport",
      "The `position: relative` property positions an element relative to the viewport, while the `position: absolute` property positions an element relative to its parent",
      "The `position: relative` property is used for static positioning, while the `position: absolute` property is used for dynamic positioning",
      "The `position: relative` property is used for dynamic positioning, while the `position: absolute` property is used for static positioning",
    ],
    correctAnswer:
      "The `position: relative` property positions an element relative to its parent, while the `position: absolute` property positions an element relative to the nearest positioned ancestor (or the viewport if no positioned ancestor exists)",
    area: "CSS",
  },

  {
    question: "What is the purpose of the `media` query in CSS?",
    options: [
      "To apply different styles based on different device screen sizes or orientations",
      "To apply different styles based on different browser types or versions",
      "To apply different styles based on different user preferences or settings",
      "To apply different styles based on different time of day or date",
    ],
    correctAnswer:
      "To apply different styles based on different device screen sizes or orientations",
    area: "CSS",
  },

  {
    question:
      "What is the difference between the `display: inline` and `display: inline-block` properties in CSS?",
    options: [
      "The `display: inline` property makes an element an inline element, while the `display: inline-block` property makes an element a block-level element",
      "The `display: inline` property makes an element a block-level element, while the `display: inline-block` property makes an element an inline element",
      "The `display: inline` property makes an element take up the full width of its parent, while the `display: inline-block` property makes an element take up only the necessary width",
      "The `display: inline` property makes an element take up only the necessary width, while the `display: inline-block` property makes an element take up the full width of its parent",
    ],
    correctAnswer:
      "The `display: inline` property makes an element an inline element that does not take up any space, while the `display: inline-block` property makes an element an inline element that takes up the necessary space",
    area: "CSS",
  },

  {
    question: "What is the purpose of the `transition` property in CSS?",
    options: [
      "To animate the change of a property from one value to another",
      "To apply a style only when a user hovers over an element",
      "To apply a style only when a user clicks on an element",
      "To apply a style only when a user scrolls to a certain point on a page",
    ],
    correctAnswer:
      "To animate the change of a property from one value to another",
    area: "CSS",
  },
  {
    question: "What is the purpose of the `git remote` command?",
    options: [
      "To create a new branch",
      "To switch to a different branch",
      "To connect to a remote repository",
      "To commit changes to the local repository",
    ],
    correctAnswer: "To connect to a remote repository",
    area: "Git",
  },

  {
    question: "What is the difference between `git merge` and `git rebase`?",
    options: [
      "git merge creates a new commit, while git rebase rewrites the commit history",
      "git merge rewrites the commit history, while git rebase creates a new commit",
      "git merge is used for local branches, while git rebase is used for remote branches",
      "git merge is used for remote branches, while git rebase is used for local branches",
    ],
    correctAnswer:
      "git merge creates a new commit, while git rebase rewrites the commit history",
    area: "Git",
  },

  {
    question: "What is the purpose of the `git submodule` command?",
    options: [
      "To manage subdirectories in a repository",
      "To manage branches in a repository",
      "To manage remote repositories",
      "To manage tags in a repository",
    ],
    correctAnswer: "To manage subdirectories in a repository",
    area: "Git",
  },

  {
    question: "What is the difference between `git status` and `git diff`?",
    options: [
      "git status shows the status of the repository, while git diff shows the changes between commits",
      "git status shows the changes between commits, while git diff shows the status of the repository",
      "git status is used for local changes, while git diff is used for remote changes",
      "git status is used for remote changes, while git diff is used for local changes",
    ],
    correctAnswer:
      "git status shows the status of the repository, while git diff shows the changes between commits",
    area: "Git",
  },

  {
    question: "What is the purpose of the `git tag` command?",
    options: [
      "To create a new branch",
      "To create a new commit",
      "To mark a specific commit with a label",
      "To delete a branch",
    ],
    correctAnswer: "To mark a specific commit with a label",
    area: "Git",
  },
  {
    question: "What is the purpose of the `git cherry-pick` command?",
    options: [
      "To apply a commit from one branch to another",
      "To merge two branches together",
      "To create a new branch from a specific commit",
      "To delete a commit from a branch",
    ],
    correctAnswer: "To apply a commit from one branch to another",
    area: "Git",
  },

  {
    question: "What is the difference between `git fetch` and `git pull`?",
    options: [
      "git fetch retrieves new commits from a remote repository, while git pull retrieves new commits and merges them into the current branch",
      "git fetch retrieves new commits and merges them into the current branch, while git pull retrieves new commits from a remote repository",
      "git fetch is used for local repositories, while git pull is used for remote repositories",
      "git fetch is used for remote repositories, while git pull is used for local repositories",
    ],
    correctAnswer:
      "git fetch retrieves new commits from a remote repository, while git pull retrieves new commits and merges them into the current branch",
    area: "Git",
  },

  {
    question: "What is the purpose of the `git reset` command?",
    options: [
      "To reset the current branch to a specific commit",
      "To delete all commits in the current branch",
      "To create a new branch from a specific commit",
      "To merge two branches together",
    ],
    correctAnswer: "To reset the current branch to a specific commit",
    area: "Git",
  },

  {
    question:
      "What is the difference between `git reset --hard` and `git reset --soft`?",
    options: [
      "git reset --hard deletes all commits and files, while git reset --soft keeps the commits and files",
      "git reset --hard keeps the commits and files, while git reset --soft deletes all commits and files",
      "git reset --hard is used for local repositories, while git reset --soft is used for remote repositories",
      "git reset --hard is used for remote repositories, while git reset --soft is used for local repositories",
    ],
    correctAnswer:
      "git reset --hard deletes all commits and files, while git reset --soft keeps the commits and files",
    area: "Git",
  },

  {
    question: "What is the purpose of the `git clean` command?",
    options: [
      "To delete untracked files and directories",
      "To create a new branch",
      "To merge two branches together",
      "To apply a commit from one branch to another",
    ],
    correctAnswer: "To delete untracked files and directories",
    area: "Git",
  },
];

export default NoviceQuestionBank;
