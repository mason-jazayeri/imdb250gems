import axios from "axios";

const MOVIESAPI = axios.create({
	baseURL: "https://moviesapi.codingfront.dev/api/v1/",
});

export default MOVIESAPI;
