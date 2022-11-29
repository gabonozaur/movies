import { Flex, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { ImageConfigurationsContext } from "../App";
import CustomImage from "../common/CustomImage";
import { basePosterLink } from "../utils/apiClient";
import { BaseMovieDTO } from "./types";

const CardFilter: React.FC<BaseMovieDTO> = ({
  original_title,
  overview,
  poster_path,
  release_date,
  id,
}) => {
  return (
    <Link href={`/${id}`} display={"flex"} py="16px" alignContent="center">
      <CustomImage src={poster_path} path="poster" />
      <Flex flex={1} direction="column" p="8px">
        <Text fontSize={"h3"} fontWeight={"bold"}>
          {original_title}
        </Text>
        <Text>{`Release: ${release_date}`}</Text>
        <Text noOfLines={2}>{overview}</Text>
      </Flex>
    </Link>
  );
};

export default CardFilter;
