const key ='d5e5fddaec2cfac3ffb6b9bf7bdd8644';

const requests = {
    requestsPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestsTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestsTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestsHorror:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=23`,
    requestsUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
export default requests