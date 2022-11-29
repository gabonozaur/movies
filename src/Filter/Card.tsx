import { Flex, Img, Link } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { ImageConfigurationsContext } from "../../App";
import { basePosterLink } from "../../utils/apiClient";
import { BaseMovieDTO } from "../types";

const CardFilter: React.FC<BaseMovieDTO> = ({
  original_title,
  overview,
  poster_path,
  backdrop_path,
}) => {
  const { configurations } = useContext(ImageConfigurationsContext);

  return (
    <Link display={"flex"}>
      <Img w="64px" src={`${basePosterLink}/w200${backdrop_path}`} />
    </Link>
  );
};

export default CardFilter;
