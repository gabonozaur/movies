export interface UseFilter {
  input: string;
  setInput: (value: string) => void;
  data: BaseMovieDTO[];
  fetching: boolean;
  fetchStatus?: boolean;
}

export interface BaseMovieDTO {
  original_title: string;
  poster_path: string;
  overview: string;
  id: number;
  backdrop_path: string;
  release_date: string;
}
