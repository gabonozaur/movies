import { BaseMovieDTO } from "../Filter/types";

export interface MovieDTO extends BaseMovieDTO {
  genres: GenreDTO[];
}

export interface GenreDTO {
  id: string;
  name: string;
}
