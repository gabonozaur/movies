import { Flex, Spinner, Text } from "@chakra-ui/react";
import CustomImage from "../../common/CustomImage";
import useMovie from "./useMovie";

const Movie = () => {
  const { fetchingMovieData, data } = useMovie();
  return fetchingMovieData ? (
    <Flex flex={1} align="center" justify="center">
      <Spinner color="orange.500" />
    </Flex>
  ) : (
    <Flex direction={"column"} gap="8px">
      <CustomImage src={data?.backdrop_path} path={"backdrop"} />
      <Text fontSize={"h3"} fontWeight={"bold"}>
        {data?.original_title}
      </Text>

      <Text>{data?.overview}</Text>
    </Flex>
  );
};

export default Movie;
