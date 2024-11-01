const projectsInfo = {
  "Personal Website": {
    url: "blah blah",
    description: "This website was build using React and Vite, and uses Tailwind css for styling."
  },
  "Game Night": {
    url: "https://game-night-fe.vercel.app/",
    frontEndRepository: "https://github.com/Game-Night-2301/game-night-fe",
    backEndRepository: "https://github.com/Game-Night-2301/game-night-be",
    description: "A group of my classmates and I combined our love of nerdy boardgames with our passion for web design and created Game Night. Users can create or attend in-person game nights, with an attached guest list, board game, and location.",
    contributions: [
      "Researched and integrated Graphql API to integrate back end and front-end. Also coached front-end team on how to structure queries and set up a mock back-end using Postman during development.",
      "Integrated OpenAI api to craft custom recommendations for players based on games in their game library.",
      "Implemented a geospatial indexing on the database to quickly sort events by distance from the user."
    ],
  },
  "Platebook": {
    frontEndRepository: "https://github.com/DysonBreakstone/plate-book-fe",
    backEndRepository: "https://github.com/andrew-bingham1/plate-book-be",
    description: "Platebook is a license-plate based social media app, like NextDoor for vehicles. With the back-end and front-end both being built by back-end developers, Platebook has a UI that only a back-end developer could love. However, it boasts an abundance of features.",
    contributions: [
      "Implemented AWS S3 for image storage and retrieval",
      "Integrated Google Cloud's Perspective AI to filter new posts and comments for threats and hate speech",
      "Created thorough API documentation using Swagger"
    ]
  }
}