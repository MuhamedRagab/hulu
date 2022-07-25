const API_KEY = process.env.API_KEY;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ferchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance Movies",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery Movies",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi Movies",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
  fetchTV: {
    title: "TV Shows",
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10765`,
  },
  fetchWestern: {
    title: "Western Movies",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation Movies",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  },
};
