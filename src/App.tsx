import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import React, { createContext } from "react";
import Filter from "./Filter";
import { UseFilter } from "./Filter/types";
import useFilter from "./Filter/useFilter";
import { UseImagesConfigurations } from "./utils/types";
import useImagesConfigurations from "./utils/useImagesConfigurations";

export const FilterContext = createContext<UseFilter>(null);
export const ImageConfigurationsContext =
  createContext<UseImagesConfigurations>(null);

const App = () => {
  const filterHookValues = useFilter();
  const configurationsHookValues = useImagesConfigurations();

  return (
    <ChakraProvider>
      <ImageConfigurationsContext.Provider value={configurationsHookValues}>
        <FilterContext.Provider value={filterHookValues}>
          <Flex>
            <Filter />
            <Flex></Flex>
          </Flex>
        </FilterContext.Provider>
      </ImageConfigurationsContext.Provider>
    </ChakraProvider>
  );
};

export default App;
