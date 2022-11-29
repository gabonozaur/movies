import axios from "axios";

//was planning to add .env file but can't figure how in SPA

const baseUrl = "https://api.themoviedb.org/3";
export const apiKey = "e92af75ede95254dd219c3566a588c48";

export const apiClient = axios.create({
  baseURL: baseUrl,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
