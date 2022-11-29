import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiClient, apiKey } from "../../utils/apiClient";
import { MovieDTO } from "./types";

const useMovie = () => {
  const { movieId } = useParams();
  const [fetchingMovieData, setFetchingMovieData] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState<MovieDTO>();

  const fetchMovieData = async () => {
    setFetchingMovieData(true);
    try {
      const res = await apiClient.get(`/movie/${movieId}?api_key=${apiKey}`);

      setFetchingMovieData(false);
      setData(res.data);
    } catch (e) {
      navigate("/");
    }
  };

  useEffect(() => {
    setFetchingMovieData(true);
    const timeout = setTimeout(() => {
      fetchMovieData();
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return { data, fetchingMovieData };
};

export default useMovie;
