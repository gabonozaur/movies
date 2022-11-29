import { CloseIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, Spinner, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext } from "../App";
import CardFilter from "./Card";

const Filter = () => {
  const { input, setInput, data, fetching, fetchStatus } =
    useContext(FilterContext);
  return (
    <Flex
      direction={"column"}
      maxW="256px"
      px="16px"
      backgroundColor={"black"}
      overflow="auto"
      position={"relative"}
      flex={1}
      color="white"
    >
      <Flex position={"sticky"} top="0px" py="16px" backgroundColor={"black"}>
        <Input
          placeholder="Movie name"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <IconButton
          isDisabled={!input}
          onClick={() => {
            setInput("");
          }}
          aria-label={"clear"}
          style={{ backgroundColor: "inherit" }}
          ml="16px"
          icon={
            <CloseIcon
              color="inherit"
              borderRadius={"50%"}
              borderWidth="2px"
              p="8px"
              boxSize={"32px"}
              borderColor={"white"}
            />
          }
        />
      </Flex>
      {fetchStatus === true && data?.length && input ? (
        data.map((record) => <CardFilter key={record?.id} {...record} />)
      ) : (
        <Flex
          direction={"column"}
          flex={1}
          justifyContent="center"
          align="center"
          color="white"
        >
          {fetching ? (
            <Spinner />
          ) : typeof fetchStatus === "boolean" ? (
            <Text color={fetchStatus ? "green.500" : "red.500"}>
              {fetchStatus ? "Success but no record" : "Failed fetching"}
            </Text>
          ) : (
            <Text color="gray.300">Input is needed</Text>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Filter;
