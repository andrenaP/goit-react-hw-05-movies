const language = 'language=en-US';
const header = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8',
};
export default class GetApiService {
  async All() {
    const url = `https://api.themoviedb.org/3/trending/all/day?${language}`;
    const options = {
      method: 'GET',
      header,
    };
    const Data = await fetch(url, options);
    return Data.json();
  }
  async Movie(query, page = 1) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&${language}&page=${page}`;
    const options = { method: 'GET', header };

    const Data = await fetch(url, options);
    return Data.json();
  }
  async Details(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?${language}`;
    const options = { method: 'GET', header };

    const Data = await fetch(url, options);
    return Data.json();
  }

  async Credits(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const options = { method: 'GET', header };

    const Data = await fetch(url, options);
    return Data.json();
  }
  async Reviews(id, page = 1) {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=${page}`;
    const options = { method: 'GET', header };

    const Data = await fetch(url, options);
    return Data.json();
  }
}
