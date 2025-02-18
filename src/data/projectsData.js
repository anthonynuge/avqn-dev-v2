export const projects = [
  {
    id: "mazeSolver",
    title: "Maze Solver",
    description: "Built in Java, this maze solver app was created to help vizualize different pathfining algorithms",
    image: "/covers/maze.webp",
    gif: "/demos/spedMaze.mp4",
    link: "",
    tags: {
      frontEnd: ["Java Swing", "JavaFX", "Java AWT"],
      backEnd: ["Java"],
      tools: ["IntelliJ IDEA", "Maven", "GitHub"],
    },
    scopes: [
      "GUI Application",
      "Algorithm Visualization",
      "Interactive UI",
    ],
    git: "https://github.com/anthonynuge/pathfinding_visualization",
    featured: false,
    summary:
      "I built Maze Solver during winter break after studying DSA to better visualize how different pathfinding algorithms traverse a grid. Got tired of constantly drawing mazes so I implemented a maze generator. Built entirely in Java, with Swing for the frontend, this project deepened my understanding of algorithmic problem-solving while creating an interactive learning tool.",
  },
  {
    id: "portfolioWebsite",
    title: "Portfolio Website",
    description:
      "Yes your in it right now. Site showcasing my work and skills.",
    image: "/covers/maze.webp",
    gif: "/demos/portfoliov2.mp4",
    link: "",
    tags: {
      frontEnd: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
        "HTML",
        "Tailwind",
        "Framer Motion",
      ],
      backEnd: ["Node.js", "Express"], // If there's no backend, you can leave this empty or remove it.
      tools: ["Vercel", "GitHub", "VS Code"],
    },
    scopes: [
      "Personal Branding",
      "Interactive UI/UX",
      "Performance Optimization",
      "Responsive Design",
    ],
    git: "https://github.com/anthonynuge/avqn-dev-v2",
    featured: false,
    when: "Feb 2025 - aprox 2 weeks",
    summary:
      "You're looking at it right now! This site is a collection of my projects and accomplishments so far in my coding journey. I'm not a UI/UX expert or a designer, but I’ve built this with things I find cool, in a way that I think looks cool. As I grow as a developer, this site will keep evolving with me."

  },
  {
    id: "fruitVision",
    title: "Fruit Vision",
    description:
      "Is that a kiwi or apple? Neural net trained to identify different fruits from images.",
    image: "/images/portfolio.png", // Replace with the correct image path
    gif: "/demos/fruitVision.mp4",
    link: "",
    tags: {
      frontEnd: ["Tkinter", "Matplotlib"],
      backEnd: ["Python", "TensorFlow", "Scikit-Learn", "Numpy"],
      tools: ["Jupyter Notebook", "VS Code", "GitHub"],
    },
    scopes: [
      "Image Classification",
      "Data Augmentation & Processing",
      "GUI w/ Batch Processing",
      "Model Training & Evaluation",
    ],
    git: "https://github.com/anthonynuge/Fruit-Identification-CNN",
    featured: true,
    when: "Nov 2024 - Dec 2024",
    summary: "Commissioned project using python and machine learning. The client wanted a standalone app where they could input images of fruits and have the model classify what type it is with confidence reports. Each image is vectorized into numerical data and a convulational neural net was then applied to learn patterns and make predictions. Although Fruit Vision was made to classify fruit the model can be trained to classify any image if loaded with enough training data."
  },

  {
    id: "fakeNewsOrNah",
    title: "Fake News Or Nah",
    description:
      "LLM trained to analyze text and determine whether it is fake or real news.",
    image: "/images/portfolio.png", // Replace with the correct image path
    gif: "/demos/fakeNewsDemo.mp4",
    link: "jdksafj",
    tags: {
      frontEnd: ["Tkinter", "Matplotlib", "Seaborn"],
      backEnd: ["Python", "Scikit-Learn", "Numpy"],
      tools: ["Jupyter Notebook", "VS Code", "GitHub"],
    },
    scopes: [
      "Proposal & Budgeting",
      "Data processing & NLP",
      "Trend Analyis & Visulaization",
      "Model Training & Evaluation",
    ],
    git: "https://github.com/anthonynuge/fake-news-detection-app",
    featured: true,
    summary:
      "A concerning issue in today's digital society is the rampant spread of misinformation online. I decided to tackle this issue for my capstone. Using machine learning and natural language processing I trained a model to analyze different news articles for fake news.   ",
    when: "Mar 2024 - May 2024",
  },

  {
    id: "e-commerceStore",
    title: "E-commerce Dashboard",
    description:
      "A modern e-commerce platform with secure payment integration. Proof of concept project.",
    image: "/images/ecommerce.png",
    gif: "/demos/inventory30fps.mp4",
    link: "",
    tags: {
      frontEnd: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Redux",
        "HTML, CSS",
        "Recharts",
      ],
      backEnd: ["Node.js", "Express", "PostgreSQL"],
      tools: ["VS Code", "GitHub", "Postman"],
    },
    scopes: [
      "Product Management",
      "User Authentication",
      "Payment Integration",
      "Analytics & Reporting",
    ],
    git: "https://github.com/anthonynuge/inventory-management",
    featured: false,
    summary: "I built this e-commerce dashboard to make managing an online store smoother and more intuitive. Instead of juggling spreadsheets and scattered data, this dashboard brings sales, inventory, and customer insights into one place. It features real-time analytics, order tracking, and dynamic visualizations to help store owners make better decisions."
  },
  {
    id: "susanAI",
    title: "Susan AI",
    description:
      "Your new AI companion utilizing gemini. Sign up to make calls.",
    image: "/images/ecommerce.png",
    gif: "/demos/inventory30fps.mp4",
    link: "",
    tags: {
      frontEnd: [
        "React",
        "TailwindCSS",
        "HTML, CSS"
      ],
      backEnd: ["Node.js", "Express", "PostgreSQL"],
      tools: ["VS Code", "GitHub", "Postman"],
    },
    git: "https://github.com/anthonynuge/susan-ai",
    featured: false,
    summary: "I built this e-commerce dashboard to make managing an online store smoother and more intuitive. Instead of juggling spreadsheets and scattered data, this dashboard brings sales, inventory, and customer insights into one place. It features real-time analytics, order tracking, and dynamic visualizations to help store owners make better decisions."
  },
  // {
  //   id: "weatherApp",
  //   title: "Weather App",
  //   description: "A weather application using OpenWeatherMap API.",
  //   image: "/images/weather.png",
  //   gif: "/gifs/fruit.webp",
  //   link: "https://weatherapp.com",
  //   tags: ["WebRTC", "Phaser", "Astro", "TypeScript"],
  //   git: "",
  //   featured: false,
  // },
];
