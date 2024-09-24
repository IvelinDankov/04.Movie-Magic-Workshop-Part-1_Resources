const movies = [
  {
    id: 1,
    imageUrl: "/img/jungle-cruise.jpeg",
    title: "Jungle Cuise",
    genre: "Adventure",
    description:
      "Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans."
  },
  {
    id: 2,
    imageUrl: "/img/the-little-mermaid.jpg",
    title: "The Little Mermaid",
    genre: "Fantasy",
    description:
      "Dreaming about saving countless lives and having another adventure"
  },
  {
    imageUrl: "/img/home-alone.jpeg",
    title: "Home Alone",
    genre: "Comedy",
    description:
      "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin (Macaulay Culkin), got into a scuffle with his older brother Buzz (Devin Ratray) and was sent to his room, which is on the third floor of his house."
  }
];

const getAll = () => movies;

export default {
    getAll
};