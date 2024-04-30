/** @format */

// questions.js

const BeginnerQuestionBank = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper-Loading Model Language",
      "Hyper-Link Markdown Language",
      "Hyper-Link Markup Language",
      "None of the above",
    ],
    correctAnswer: "Hyper-Link Markup Language",
    area: "HTML",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<script>", "<internal>"],
    correctAnswer: "<style>",
    area: "CSS",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "myFunction function()",
    ],
    correctAnswer: "function myFunction()",
    area: "JavaScript",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
    correctAnswer: "if (i == 5)",
    area: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheet",
      "Colorful Style Sheet",
      "Creative Style Sheet",
      "Computer Style Sheet",
    ],
    correctAnswer: "Cascading Style Sheet",
    area: "CSS",
  },
  {
    question: "How do you select an element with id 'demo' in CSS?",
    options: [".demo", "#demo", "demo", "*demo"],
    correctAnswer: "#demo",
    area: "CSS",
  },
  {
    question:
      "Which HTML attribute is used to specify that an input field must be filled out?",
    options: ["required", "placeholder", "formvalidate", "validate"],
    correctAnswer: "required",
    area: "HTML",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: "font-size",
    area: "CSS",
  },
  {
    question: "How do you call a function named 'myFunction' in JavaScript?",
    options: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
      "myFunction(call)",
    ],
    correctAnswer: "myFunction()",
    area: "JavaScript",
  },
  {
    question:
      "How to insert a comment that has more than one line in JavaScript?",
    options: [
      "// This comment has\nmore than one line",
      "/* This comment has\nmore than one line */",
      "-- This comment has\nmore than one line --",
      "<!-- This comment has\nmore than one line -->",
    ],
    correctAnswer: "/* This comment has\nmore than one line */",
    area: "JavaScript",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<background>yellow</background>",
      '<body style="background-color:yellow;">',
      "<body bg='yellow'>",
      "<body color='yellow'>",
    ],
    correctAnswer: '<body style="background-color:yellow;">',
    area: "HTML",
  },
  {
    question:
      "How do you round the number 7.25, to the nearest integer, in JavaScript?",
    options: ["rnd(7.25)", "Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)"],
    correctAnswer: "Math.round(7.25)",
    area: "JavaScript",
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
    area: "HTML",
  },
  {
    question: "Which CSS property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    correctAnswer: "background-color",
    area: "CSS",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: ["consst carName;", "carName;", "c carName;", "declare carName;"],
    correctAnswer: "const carName;",
    area: "JavaScript",
  },
  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["-", "*", "=", "+="],
    correctAnswer: "=",
    area: "JavaScript",
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    options: [
      '<stylesheet href="mystyle.css">',
      '<style src="mystyle.css">',
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      '<style href="mystyle.css">',
    ],
    correctAnswer: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
    area: "CSS",
  },
  {
    question: "What will the following JavaScript code return: Boolean(10 > 9)",
    options: ["NaN", "false", "true", "undefined"],
    correctAnswer: "true",
    area: "JavaScript",
  },
  {
    question: "Which HTML tag is used to specify a section of a document?",
    options: ["<section>", "<div>", "<article>", "<chapter>"],
    correctAnswer: "<section>",
    area: "HTML",
  },
  {
    question: "Which CSS property is used to set the text color of an element?",
    options: ["text-color", "color", "font-color", "text"],
    correctAnswer: "color",
    area: "CSS",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    options: [
      "document.getElementByName('p').innerHTML = 'Hello World!';",
      "document.getElementById('demo').innerHTML = 'Hello World!';",
      "#demo.innerHTML = 'Hello World!';",
      "document.getElement('p').innerHTML = 'Hello World!';",
    ],
    correctAnswer:
      "document.getElementById('demo').innerHTML = 'Hello World!';",
    area: "JavaScript",
  },
  {
    question: "How do you write 'Hello World' in an alert box in JavaScript?",
    options: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
      "msg('Hello World');",
    ],
    correctAnswer: "alert('Hello World');",
    area: "JavaScript",
  },
  {
    question: "What is the correct HTML for creating a checkbox?",
    options: [
      "<checkbox>",
      "<check>",
      "<input type='check'>",
      "<input type='checkbox'>",
    ],
    correctAnswer: "<input type='checkbox'>",
    area: "HTML",
  },
  {
    question: "What is the JavaScript syntax for printing values in Console?",
    options: [
      "print(5)",
      "console.log(5);",
      "console.print(5);",
      "print.console(5);",
    ],
    correctAnswer: "console.log(5);",
    area: "JavaScript",
  },
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A different version of JavaScript",
      "A database",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
    area: "React",
  },
  {
    question: "What is JSX in React?",
    options: [
      "A syntax extension for JavaScript",
      "A styling language",
      "A tool for managing state",
      "A type of database",
    ],
    correctAnswer: "A syntax extension for JavaScript",
    area: "React",
  },
  {
    question: "What is a component in React?",
    options: [
      "A JavaScript function or class that optionally accepts inputs and returns a React element",
      "A type of database",
      "A CSS framework",
      "A syntax extension for JavaScript",
    ],
    correctAnswer:
      "A JavaScript function or class that optionally accepts inputs and returns a React element",
    area: "React",
  },
  {
    question: "What is state in React?",
    options: [
      "A built-in object used to store property values for the JavaScript object",
      "A type of database",
      "A syntax extension for JavaScript",
      "A CSS framework",
    ],
    correctAnswer:
      "A built-in object used to store property values for the JavaScript object",
    area: "React",
  },
  {
    question: "What is a prop in React?",
    options: [
      "A way to pass data from components to other components",
      "A type of database",
      "A syntax extension for JavaScript",
      "A CSS framework",
    ],
    correctAnswer: "A way to pass data from components to other components",
    area: "React",
  },
  {
    question: "What is the use of keys in React?",
    options: [
      "Keys help React identify which items have changed, are added, or are removed",
      "Keys are used to trigger event handlers",
      "Keys are used to define styles in a component",
      "Keys are used to store internal state",
    ],
    correctAnswer:
      "Keys help React identify which items have changed, are added, or are removed",
    area: "React",
  },
  {
    question: "What is the purpose of the render method in React?",
    options: [
      "It's used to update the state",
      "It's used to listen to events",
      "It's used to render a component to the DOM",
      "It's used to fetch data",
    ],
    correctAnswer: "It's used to render a component to the DOM",
    area: "React",
  },
  {
    question: "What is a higher order component (HOC) in React?",
    options: [
      "A component that accepts a component as an argument",
      "A component that changes the state",
      "A component that renders other components",
      "A component that handles events",
    ],
    correctAnswer: "A component that accepts a component as an argument",
    area: "React",
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A copy of the real DOM",
      "A method for handling events",
      "A type of component",
      "A tool for managing state",
    ],
    correctAnswer: "A copy of the real DOM",
    area: "React",
  },
  {
    question: "What is the use of the componentDidMount method in React?",
    options: [
      "It's used to fetch data",
      "It's used to listen to events",
      "It's used to update the state",
      "It's used to render a component to the DOM",
    ],
    correctAnswer: "It's used to fetch data",
    area: "React",
  },
  {
    question: "What is Redux in the context of React?",
    options: [
      "A tool for managing state",
      "A type of component",
      "A method for handling events",
      "A copy of the real DOM",
    ],
    correctAnswer: "A tool for managing state",
    area: "React",
  },
  {
    question: "What is a React Hook?",
    options: [
      "A function that lets you use state and other React features without writing a class",
      "A type of component",
      "A method for handling events",
      "A tool for managing state",
    ],
    correctAnswer:
      "A function that lets you use state and other React features without writing a class",
    area: "React",
  },
  {
    question: "How do you declare an array in JavaScript?",
    options: [
      "let arr = (1, 2, 3);",
      "let arr = [1, 2, 3];",
      "let arr = {1, 2, 3};",
      "let arr = <1, 2, 3>;",
    ],
    correctAnswer: "let arr = [1, 2, 3];",
    area: "JavaScript",
  },
  {
    question: "What does the push method do in JavaScript?",
    options: [
      "Removes the last element from an array",
      "Adds new elements to the end of an array",
      "Removes the first element from an array",
      "Adds new elements to the beginning of an array",
    ],
    correctAnswer: "Adds new elements to the end of an array",
    area: "JavaScript",
  },
  {
    question: "What does the pop method do in JavaScript?",
    options: [
      "Removes the last element from an array",
      "Adds new elements to the end of an array",
      "Removes the first element from an array",
      "Adds new elements to the beginning of an array",
    ],
    correctAnswer: "Removes the last element from an array",
    area: "JavaScript",
  },
  {
    question: "What does the shift method do in JavaScript?",
    options: [
      "Removes the last element from an array",
      "Adds new elements to the end of an array",
      "Removes the first element from an array",
      "Adds new elements to the beginning of an array",
    ],
    correctAnswer: "Removes the first element from an array",
    area: "JavaScript",
  },
  {
    question: "What does the unshift method do in JavaScript?",
    options: [
      "Removes the last element from an array",
      "Adds new elements to the end of an array",
      "Removes the first element from an array",
      "Adds new elements to the beginning of an array",
    ],
    correctAnswer: "Adds new elements to the beginning of an array",
    area: "JavaScript",
  },
  {
    question: "What does the splice method do in JavaScript?",
    options: [
      "Changes the content of an array by removing or replacing existing elements and/or adding new elements",
      "Removes the last element from an array",
      "Adds new elements to the end of an array",
      "Removes the first element from an array",
    ],
    correctAnswer:
      "Changes the content of an array by removing or replacing existing elements and/or adding new elements",
    area: "JavaScript",
  },
  {
    question: "What does the 'ls' command do in bash?",
    options: [
      "Lists all files and directories in the current directory",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Lists all files and directories in the current directory",
    area: "Bash",
  },
  {
    question: "What does the 'cd' command do in bash?",
    options: [
      "Lists all files and directories in the current directory",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Changes the current directory",
    area: "Bash",
  },
  {
    question: "What does the 'pwd' command do in bash?",
    options: [
      "Lists all files and directories in the current directory",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Shows the current directory",
    area: "Bash",
  },
  {
    question: "What does the 'rm' command do in bash?",
    options: [
      "Lists all files and directories in the current directory",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Deletes a file",
    area: "Bash",
  },
  {
    question: "What does the 'cp' command do in bash?",
    options: [
      "Copies a file or directory",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Copies a file or directory",
    area: "Bash",
  },
  {
    question: "What does the 'mv' command do in bash?",
    options: [
      "Moves or renames a file or directory",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Moves or renames a file or directory",
    area: "Bash",
  },
  {
    question: "What does the 'cat' command do in bash?",
    options: [
      "Concatenates and displays file content",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Concatenates and displays file content",
    area: "Bash",
  },
  {
    question: "What does the 'echo' command do in bash?",
    options: [
      "Outputs the strings it is being passed as arguments",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Outputs the strings it is being passed as arguments",
    area: "Bash",
  },
  {
    question: "What does the 'mkdir' command do in bash?",
    options: [
      "Creates a new directory",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Creates a new directory",
    area: "Bash",
  },
  {
    question: "What does the 'touch' command do in bash?",
    options: [
      "Creates a new empty file",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Creates a new empty file",
    area: "Bash",
  },
  {
    question: "What does the 'grep' command do in bash?",
    options: [
      "Searches for a pattern in a file",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Searches for a pattern in a file",
    area: "Bash",
  },
  {
    question: "What does the 'chmod' command do in bash?",
    options: [
      "Changes the permissions of a file",
      "Changes the current directory",
      "Shows the current directory",
      "Deletes a file",
    ],
    correctAnswer: "Changes the permissions of a file",
    area: "Bash",
  },
  {
    question: "How do you create a new React app using Create React App?",
    options: [
      "react new my-app",
      "create-react-app new my-app",
      "npm start my-app",
      "npx create-react-app my-app",
    ],
    correctAnswer: "npx create-react-app my-app",
    area: "React",
  },
  {
    question: "How do you start a React app in development mode?",
    options: ["npm start", "npm run", "npm build", "npm init"],
    correctAnswer: "npm start",
    area: "React",
  },
  {
    question: "How do you build a React app for production?",
    options: ["npm start", "npm run", "npm build", "npm init"],
    correctAnswer: "npm build",
    area: "React",
  },
  {
    question: "How do you install a new npm package for your React app?",
    options: [
      "npm install package-name",
      "npm new package-name",
      "npm start package-name",
      "npm create package-name",
    ],
    correctAnswer: "npm install package-name",
    area: "React",
  },
  {
    question: "How do you uninstall an npm package from your React app?",
    options: [
      "npm uninstall package-name",
      "npm delete package-name",
      "npm remove package-name",
      "npm stop package-name",
    ],
    correctAnswer: "npm uninstall package-name",
    area: "React",
  },
  {
    question: "How do you update all npm packages in your React app?",
    options: ["npm update", "npm upgrade", "npm renew", "npm refresh"],
    correctAnswer: "npm update",
    area: "React",
  },
  {
    question: "How do you clone a repository from GitHub?",
    options: [
      "git clone <repository-url>",
      "git pull <repository-url>",
      "git push <repository-url>",
      "git fetch <repository-url>",
    ],
    correctAnswer: "git clone <repository-url>",
    area: "Git",
  },
  {
    question: "How do you stage all changes for a commit?",
    options: ["git add .", "git commit .", "git push .", "git pull ."],
    correctAnswer: "git add .",
    area: "Git",
  },
  {
    question: "How do you commit staged changes with a message?",
    options: [
      "git commit -m 'commit message'",
      "git add -m 'commit message'",
      "git push -m 'commit message'",
      "git pull -m 'commit message'",
    ],
    correctAnswer: "git commit -m 'commit message'",
    area: "Git",
  },
  {
    question: "How do you push committed changes to GitHub?",
    options: ["git push", "git pull", "git add", "git commit"],
    correctAnswer: "git push",
    area: "Git",
  },
  {
    question: "How do you pull the latest changes from GitHub?",
    options: ["git pull", "git push", "git add", "git commit"],
    correctAnswer: "git pull",
    area: "Git",
  },
  {
    question: "How do you create a new branch?",
    options: [
      "git branch <branch-name>",
      "git checkout <branch-name>",
      "git push <branch-name>",
      "git pull <branch-name>",
    ],
    correctAnswer: "git branch <branch-name>",
    area: "Git",
  },
  {
    question: "How do you check the status of your local git repository?",
    options: ["git status", "git check", "git log", "git show"],
    correctAnswer: "git status",
    area: "Git",
  },
  {
    question: "How do you view the commit history?",
    options: ["git log", "git history", "git commits", "git show"],
    correctAnswer: "git log",
    area: "Git",
  },
  {
    question: "How do you revert to a previous commit?",
    options: [
      "git revert <commit-hash>",
      "git reset <commit-hash>",
      "git checkout <commit-hash>",
      "git return <commit-hash>",
    ],
    correctAnswer: "git revert <commit-hash>",
    area: "Git",
  },
  {
    question: "How do you switch to a different branch?",
    options: [
      "git checkout <branch-name>",
      "git switch <branch-name>",
      "git jump <branch-name>",
      "git move <branch-name>",
    ],
    correctAnswer: "git checkout <branch-name>",
    area: "Git",
  },
  {
    question:
      "How do you merge changes from another branch into your current branch?",
    options: [
      "git merge <branch-name>",
      "git combine <branch-name>",
      "git join <branch-name>",
      "git attach <branch-name>",
    ],
    correctAnswer: "git merge <branch-name>",
    area: "Git",
  },
  {
    question: "How do you stash your changes?",
    options: ["git stash", "git hide", "git save", "git store"],
    correctAnswer: "git stash",
    area: "Git",
  },
  {
    question: "How do you unstash the most recently stashed changes?",
    options: [
      "git stash pop",
      "git stash apply",
      "git stash drop",
      "git stash show",
    ],
    correctAnswer: "git stash pop",
    area: "Git",
  },
  {
    question:
      "How do you view the differences between your working directory and the last commit?",
    options: ["git diff", "git show", "git log", "git status"],
    correctAnswer: "git diff",
    area: "Git",
  },
  {
    question:
      "How do you fetch changes from the remote repository without merging them into your current branch?",
    options: ["git fetch", "git pull", "git clone", "git checkout"],
    correctAnswer: "git fetch",
    area: "Git",
  },
  {
    question: "How do you set a new remote repository?",
    options: [
      "git remote add <name> <url>",
      "git remote set <name> <url>",
      "git remote new <name> <url>",
      "git remote create <name> <url>",
    ],
    correctAnswer: "git remote add <name> <url>",
    area: "Git",
  },
  {
    question: "How do you remove a file from the Git repository?",
    options: [
      "git rm <file>",
      "git delete <file>",
      "git remove <file>",
      "git erase <file>",
    ],
    correctAnswer: "git rm <file>",
    area: "Git",
  },
  {
    question: "How do you rename a file in the Git repository?",
    options: [
      "git mv <old-name> <new-name>",
      "git rename <old-name> <new-name>",
      "git change <old-name> <new-name>",
      "git switch <old-name> <new-name>",
    ],
    correctAnswer: "git mv <old-name> <new-name>",
    area: "Git",
  },
];

export default BeginnerQuestionBank;
