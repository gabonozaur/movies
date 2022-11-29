import { useEffect, useState } from "react";
import { apiClient, apiKey } from "../../utils/apiClient";
import { BaseMovieDTO, UseFilter } from "./types";

const useFilter = (): UseFilter => {
  const [data, setData] = useState<BaseMovieDTO[]>([]);
  const [fetching, setFetching] = useState(false);
  const [input, setInput] = useState("");
  const [fetchStatus, setFetchStatus] = useState(null);

  const fetchData = async () => {
    setFetching(true);
    setFetchStatus(null);
    try {
      const res = await apiClient.get(
        `/search/movie?api_key=${apiKey}&query=${encodeURI(input)}`
      );
      setData(res.data.results);
      setFetchStatus(true);
    } catch (e) {
      setFetchStatus(false);
      //something for handling error
    }
    setFetching(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input) {
        fetchData();
      }
    }, 500);

    if (!input) {
      setData([]);
    } else {
      setFetching(true);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return { input, setInput, data, fetching, fetchStatus };
};

export default useFilter;
