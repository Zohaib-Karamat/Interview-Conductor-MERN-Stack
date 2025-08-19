// data/questions.js
export const mernQuestions = [
  // MongoDB Questions (1-12)
  {
    id: 1,
    category: "MongoDB",
    question: "What does the 'M' in MERN stack stand for?",
    options: {
      a: "MySQL",
      b: "MongoDB",
      c: "MariaDB",
      d: "Microsoft SQL"
    },
    correct: "b"
  },
  {
    id: 2,
    category: "MongoDB",
    question: "Which of the following is NOT a MongoDB data type?",
    options: {
      a: "ObjectId",
      b: "Array",
      c: "Decimal",
      d: "Relation"
    },
    correct: "d"
  },
  // {
  //   id: 3,
  //   category: "MongoDB",
  //   question: "What is the default port number for MongoDB?",
  //   options: {
  //     a: "27017",
  //     b: "3000",
  //     c: "5432",
  //     d: "3306"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 4,
  //   category: "MongoDB",
  //   question: "Which method is used to insert a document in MongoDB?",
  //   options: {
  //     a: "add()",
  //     b: "insert()",
  //     c: "insertOne()",
  //     d: "create()"
  //   },
  //   correct: "c"
  // },
  // {
  //   id: 5,
  //   category: "MongoDB",
  //   question: "What is a collection in MongoDB?",
  //   options: {
  //     a: "A database",
  //     b: "A group of MongoDB documents",
  //     c: "A table",
  //     d: "A field"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 6,
  //   category: "MongoDB",
  //   question: "Which operator is used for text search in MongoDB?",
  //   options: {
  //     a: "$search",
  //     b: "$text",
  //     c: "$find",
  //     d: "$match"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 7,
  //   category: "MongoDB",
  //   question: "What is the purpose of an index in MongoDB?",
  //   options: {
  //     a: "To store data",
  //     b: "To improve query performance",
  //     c: "To create relationships",
  //     d: "To backup data"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 8,
  //   category: "MongoDB",
  //   question: "Which method is used to update documents in MongoDB?",
  //   options: {
  //     a: "modify()",
  //     b: "change()",
  //     c: "updateOne()",
  //     d: "edit()"
  //   },
  //   correct: "c"
  // },
  // {
  //   id: 9,
  //   category: "MongoDB",
  //   question: "What is MongoDB Atlas?",
  //   options: {
  //     a: "A local MongoDB installation",
  //     b: "A MongoDB GUI tool",
  //     c: "A cloud-hosted MongoDB service",
  //     d: "A MongoDB driver"
  //   },
  //   correct: "c"
  // },
  // {
  //   id: 10,
  //   category: "MongoDB",
  //   question: "Which aggregation stage is used to filter documents?",
  //   options: {
  //     a: "$group",
  //     b: "$match",
  //     c: "$project",
  //     d: "$sort"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 11,
  //   category: "MongoDB",
  //   question: "What is the maximum document size in MongoDB?",
  //   options: {
  //     a: "8MB",
  //     b: "16MB",
  //     c: "32MB",
  //     d: "64MB"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 12,
  //   category: "MongoDB",
  //   question: "Which method is used to connect to MongoDB using Mongoose?",
  //   options: {
  //     a: "mongoose.connect()",
  //     b: "mongoose.link()",
  //     c: "mongoose.attach()",
  //     d: "mongoose.join()"
  //   },
  //   correct: "a"
  // },

  // // Express.js Questions (13-25)
  // {
  //   id: 13,
  //   category: "Express.js",
  //   question: "What is Express.js?",
  //   options: {
  //     a: "A database",
  //     b: "A web framework for Node.js",
  //     c: "A frontend library",
  //     d: "A CSS framework"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 14,
  //   category: "Express.js",
  //   question: "Which method is used to handle GET requests in Express?",
  //   options: {
  //     a: "app.get()",
  //     b: "app.request()",
  //     c: "app.handle()",
  //     d: "app.receive()"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 15,
  //   category: "Express.js",
  //   question: "What is middleware in Express.js?",
  //   options: {
  //     a: "A database layer",
  //     b: "Functions that execute during request-response cycle",
  //     c: "A routing mechanism",
  //     d: "A template engine"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 16,
  //   category: "Express.js",
  //   question: "Which object represents the HTTP request in Express?",
  //   options: {
  //     a: "request",
  //     b: "req",
  //     c: "http",
  //     d: "get"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 17,
  //   category: "Express.js",
  //   question: "How do you serve static files in Express?",
  //   options: {
  //     a: "app.static()",
  //     b: "express.static()",
  //     c: "app.use(express.static())",
  //     d: "app.files()"
  //   },
  //   correct: "c"
  // },
  // {
  //   id: 18,
  //   category: "Express.js",
  //   question: "What is the purpose of body-parser in Express?",
  //   options: {
  //     a: "To parse URL parameters",
  //     b: "To parse request bodies",
  //     c: "To parse cookies",
  //     d: "To parse headers"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 19,
  //   category: "Express.js",
  //   question: "Which status code represents 'Not Found' in HTTP?",
  //   options: {
  //     a: "400",
  //     b: "401",
  //     c: "404",
  //     d: "500"
  //   },
  //   correct: "c"
  // },
  // {
  //   id: 20,
  //   category: "Express.js",
  //   question: "How do you handle errors in Express middleware?",
  //   options: {
  //     a: "Using try-catch",
  //     b: "Using next() with error parameter",
  //     c: "Using throw statement",
  //     d: "Using error handler"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 21,
  //   category: "Express.js",
  //   question: "What is CORS in Express?",
  //   options: {
  //     a: "Cross-Origin Resource Sharing",
  //     b: "Cross-Origin Request Security",
  //     c: "Core Object Request System",
  //     d: "Cross-Origin Response Standard"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 22,
  //   category: "Express.js",
  //   question: "Which method is used to handle all HTTP methods in Express?",
  //   options: {
  //     a: "app.any()",
  //     b: "app.all()",
  //     c: "app.methods()",
  //     d: "app.handle()"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 23,
  //   category: "Express.js",
  //   question: "How do you access route parameters in Express?",
  //   options: {
  //     a: "req.params",
  //     b: "req.query",
  //     c: "req.body",
  //     d: "req.headers"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 24,
  //   category: "Express.js",
  //   question: "What is the purpose of express.Router()?",
  //   options: {
  //     a: "To create modular route handlers",
  //     b: "To handle static files",
  //     c: "To parse request bodies",
  //     d: "To handle errors"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 25,
  //   category: "Express.js",
  //   question: "Which Express method is used to handle POST requests?",
  //   options: {
  //     a: "app.post()",
  //     b: "app.send()",
  //     c: "app.create()",
  //     d: "app.insert()"
  //   },
  //   correct: "a"
  // },

  // // React.js Questions (26-37)
  // {
  //   id: 26,
  //   category: "React.js",
  //   question: "What is React?",
  //   options: {
  //     a: "A backend framework",
  //     b: "A JavaScript library for building user interfaces",
  //     c: "A database",
  //     d: "A CSS framework"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 27,
  //   category: "React.js",
  //   question: "What is JSX?",
  //   options: {
  //     a: "JavaScript XML",
  //     b: "Java Syntax Extension",
  //     c: "JSON XML",
  //     d: "JavaScript Extension"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 28,
  //   category: "React.js",
  //   question: "Which hook is used to manage state in functional components?",
  //   options: {
  //     a: "useEffect",
  //     b: "useState",
  //     c: "useContext",
  //     d: "useReducer"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 29,
  //   category: "React.js",
  //   question: "What is the Virtual DOM?",
  //   options: {
  //     a: "A copy of the real DOM kept in memory",
  //     b: "A new version of HTML",
  //     c: "A CSS framework",
  //     d: "A JavaScript engine"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 30,
  //   category: "React.js",
  //   question: "Which hook is used for side effects in React?",
  //   options: {
  //     a: "useState",
  //     b: "useContext",
  //     c: "useEffect",
  //     d: "useCallback"
  //   },
  //   correct: "c"
  // },
  // {
  //   id: 31,
  //   category: "React.js",
  //   question: "What is a component in React?",
  //   options: {
  //     a: "A function or class that returns JSX",
  //     b: "A CSS file",
  //     c: "A database table",
  //     d: "A server route"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 32,
  //   category: "React.js",
  //   question: "What is props in React?",
  //   options: {
  //     a: "Component state",
  //     b: "Properties passed to components",
  //     c: "CSS properties",
  //     d: "Database properties"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 33,
  //   category: "React.js",
  //   question: "Which method is called when a component is first created?",
  //   options: {
  //     a: "componentDidMount",
  //     b: "componentWillMount",
  //     c: "componentDidUpdate",
  //     d: "componentWillUnmount"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 34,
  //   category: "React.js",
  //   question: "What is the purpose of keys in React lists?",
  //   options: {
  //     a: "To style elements",
  //     b: "To help React identify which items have changed",
  //     c: "To store data",
  //     d: "To handle events"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 35,
  //   category: "React.js",
  //   question: "What is Redux?",
  //   options: {
  //     a: "A React component",
  //     b: "A state management library",
  //     c: "A routing library",
  //     d: "A CSS framework"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 36,
  //   category: "React.js",
  //   question: "Which hook is used to optimize performance by memoizing values?",
  //   options: {
  //     a: "useMemo",
  //     b: "useCallback",
  //     c: "useEffect",
  //     d: "useState"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 37,
  //   category: "React.js",
  //   question: "What is React Router used for?",
  //   options: {
  //     a: "State management",
  //     b: "API calls",
  //     c: "Client-side routing",
  //     d: "Styling components"
  //   },
  //   correct: "c"
  // },

  // // Node.js Questions (38-50)
  // {
  //   id: 38,
  //   category: "Node.js",
  //   question: "What is Node.js?",
  //   options: {
  //     a: "A browser",
  //     b: "A JavaScript runtime built on Chrome's V8 engine",
  //     c: "A database",
  //     d: "A CSS framework"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 39,
  //   category: "Node.js",
  //   question: "Which module is used for file system operations in Node.js?",
  //   options: {
  //     a: "http",
  //     b: "fs",
  //     c: "path",
  //     d: "url"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 40,
  //   category: "Node.js",
  //   question: "What is npm?",
  //   options: {
  //     a: "Node Package Manager",
  //     b: "New Project Manager",
  //     c: "Node Process Manager",
  //     d: "Network Package Manager"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 41,
  //   category: "Node.js",
  //   question: "Which method is used to create an HTTP server in Node.js?",
  //   options: {
  //     a: "http.createServer()",
  //     b: "http.server()",
  //     c: "http.start()",
  //     d: "http.listen()"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 42,
  //   category: "Node.js",
  //   question: "What is the event loop in Node.js?",
  //   options: {
  //     a: "A loop that handles events",
  //     b: "A mechanism that handles asynchronous operations",
  //     c: "A loop for arrays",
  //     d: "A database connection"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 43,
  //   category: "Node.js",
  //   question: "Which of the following is true about Node.js?",
  //   options: {
  //     a: "It is single-threaded",
  //     b: "It is multi-threaded",
  //     c: "It doesn't support threading",
  //     d: "It is synchronous"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 44,
  //   category: "Node.js",
  //   question: "What is a callback function in Node.js?",
  //   options: {
  //     a: "A function that calls back",
  //     b: "A function passed as an argument to another function",
  //     c: "A function that returns a value",
  //     d: "A function that handles errors"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 45,
  //   category: "Node.js",
  //   question: "Which of the following is used to handle asynchronous operations?",
  //   options: {
  //     a: "Callbacks",
  //     b: "Promises",
  //     c: "Async/Await",
  //     d: "All of the above"
  //   },
  //   correct: "d"
  // },
  // {
  //   id: 46,
  //   category: "Node.js",
  //   question: "What is the purpose of package.json?",
  //   options: {
  //     a: "To store project metadata and dependencies",
  //     b: "To store configuration",
  //     c: "To store data",
  //     d: "To store routes"
  //   },
  //   correct: "a"
  // },
  // {
  //   id: 47,
  //   category: "Node.js",
  //   question: "Which command is used to install packages globally in npm?",
  //   options: {
  //     a: "npm install -g",
  //     b: "npm install --global",
  //     c: "npm global install",
  //     d: "Both a and b"
  //   },
  //   correct: "d"
  // },
  // {
  //   id: 48,
  //   category: "Node.js",
  //   question: "What is middleware in Node.js context?",
  //   options: {
  //     a: "Software between operating system and applications",
  //     b: "Functions that execute between request and response",
  //     c: "Database layer",
  //     d: "Authentication layer"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 49,
  //   category: "Node.js",
  //   question: "Which Node.js module is used for creating RESTful APIs?",
  //   options: {
  //     a: "http",
  //     b: "express",
  //     c: "fs",
  //     d: "path"
  //   },
  //   correct: "b"
  // },
  // {
  //   id: 50,
  //   category: "Node.js",
  //   question: "What is the purpose of nodemon?",
  //   options: {
  //     a: "To monitor file changes and restart the server",
  //     b: "To debug applications",
  //     c: "To test applications",
  //     d: "To deploy applications"
  //   },
  //   correct: "a"
  // }
];
