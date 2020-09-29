const API_KEY = "9f637a757e27787397137fc6194fb0a6";
const API_BASE = "https://api.themoviedb.org/3";
const API_LANG = "pt-BR";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = req.json();

  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=${API_LANG}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(
          `/trending/all/week?language=${API_LANG}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?language=${API_LANG}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=${API_LANG}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=${API_LANG}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=${API_LANG}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=${API_LANG}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=${API_LANG}&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
