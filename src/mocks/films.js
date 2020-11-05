const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomBoolean = () => {
  return Boolean(getRandomInteger());
};

const Titles = [`Mindhunter`, `Macbeth`, `Johnny English`, `Midnight Special`, `Orlando`, `Revenant`, `Snatch`, `Pulp Fiction`];
const Descriptions = [
  `In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.`,
  `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  `Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.`,
  `Jules Winnfield and Vincent Vega are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace. Wallace has also asked Vincent to take his wife Mia out a few days later when Wallace himself will be out of town. Butch Coolidge is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.`,
  `Alton Meyer is a boy unlike any other in the world with bizarrely powerful abilities and strange weaknesses. In the middle of the night, his father, Roy, spirits him away from the isolated cult that practically worships him and is determined to regain him at all costs. At the same time, Alton's abilities have been noticed by the US government as well and they are equally insistent on getting to the bottom of this mystery with Paul Sevier of the National Security Agency leading the Federal pursuit with his own questions. These rival hunts force father and son into a desperate run towards a looming date with destiny that could change everything.`
];

const Directors = [`Justin Kurzel`, `David Fincher`, `Jeff Nichols`, `Sally Potter`];
const Actors = [`Sharon Davison`, `Anna Torv`, `Michael Shannon`, `Sam Shepard`, `Joel Edgerton`, `Kirsten Dunst`, `Adam Driver`, `Uma Thurman`];
const Covers = [`mindhunter`, `orlando`, `macbeth`, `johnny-english`, `no-country-for-old-men`, `moonrise-kingdom`, `we-need-to-talk-about-kevin`, `midnight-special`, `revenant`, `snatch`, `pulp-fiction`];
const Genres = [`Comedy`, `Drama`, `Thriller`, `Horror`, `Musical`, `Sci-Fi`, `Kids & Family`, `Documentary`];
const Reviews = [
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`
];

const FilmIds = [`cVuqZSZCysDHc_5qM9dEx`, `AIzgefMlfaHJyg_vOnc-f`, `GUFUG7cU21RzkvDo5Hcru`, `hB4EQhyVs-AJ4DY3aj5nj`, `H_jRqxXf-odFFgWVt0RX7`, `p-0RWpr_Yd2VksL88s89Z`, `mLFkNk1uItVQMoUxIo9Nb`, `csYYyqC7wu4l-9H6D4VJn`];

const generateReview = (reviewIndex) => {
  return {
    id: reviewIndex,
    text: Reviews[getRandomInteger(0, Reviews.length - 1)],
    rating: 7.2,
    author: `John Doe`,
    reviewDate: new Date().toISOString()
  };
};

const generateFilmCard = (i) => {
  const id = FilmIds[i];

  if (!id) {
    throw new Error(`Some problem with id in film`);
  }

  return {
    id,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    cover: `/img/${Covers[getRandomInteger(0, Covers.length - 1)]}.jpg`,
    title: Titles[i],
    genre: Genres[getRandomInteger(0, Genres.length - 1)],
    releaseDate: `2017`,
    description: Descriptions[getRandomInteger(0, Descriptions.length - 1)],
    rating: Number(`${getRandomInteger(2, 8)}.${getRandomInteger(0, 9)}`),
    ratingCount: 14,
    director: Directors[getRandomInteger(0, Directors.length - 1)],
    actors: Actors.slice(0, getRandomInteger(1, Actors.length - 1)),
    runtime: 100,
    reviews: new Array(getRandomInteger(0, 7)).fill().map((item, index) => generateReview(index)),
    addedToMyList: getRandomBoolean()
  };
};

export const films = new Array(8).fill().map((film, i) => generateFilmCard(i));
export const promo = films[2];
