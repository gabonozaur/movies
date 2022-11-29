import { useEffect, useState } from "react";
import { apiClient, apiKey } from "../utils/apiClient";
import { BaseMovieDTO, UseFilter } from "./types";

const useFilter = (): UseFilter => {
  const [data, setData] = useState<BaseMovieDTO[]>([]);
  const [fetching, setFetching] = useState(false);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    setFetching(true);
    try {
      const res = await apiClient.get(
        `/search/movie?api_key=${apiKey}&query=${encodeURI(input)}`
      );
      console.log("res is", res);
      setData(res.data.results);
    } catch (e) {
      //something for handling error
    }
    setFetching(false);
  };
  const fetchConfiguration = async () => {
    try {
      const res = await apiClient.get(
        `/configuration?api_key=${apiKey}&query=${encodeURI(input)}`
      );
      console.log("res is", res);
    } catch (e) {
      //something for handling error
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input) {
        fetchData();
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  useEffect(() => {
    fetchConfiguration();
  }, []);
  return { input, setInput, data, fetching };
};

export default useFilter;
