import axios from "axios";

/* baseurl to make request to the tmdb database */
const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export default instance;
