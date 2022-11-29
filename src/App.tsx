import { ChakraProvider, Flex } from "@chakra-ui/react";
import { createContext } from "react";
import Filter from "./components/Filter";
import { UseFilter } from "./components/Filter/types";
import useFilter from "./components/Filter/useFilter";
import { UseImagesConfigurations } from "./utils/types";
import useImagesConfigurations from "./utils/useImagesConfigurations";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage.tsx";
import Movie from "./components/Movie";

export const FilterContext = createContext<UseFilter>(null);
export const ImageConfigurationsContext =
  createContext<UseImagesConfigurations>(null);

const App = () => {
  const filterHookValues = useFilter();
  const configurationsHookValues = useImagesConfigurations();

  return (
    <Router>
      <ChakraProvider>
        <ImageConfigurationsContext.Provider value={configurationsHookValues}>
          <FilterContext.Provider value={filterHookValues}>
            <Flex
              position={"fixed"}
              top="0px"
              right="0px"
              bottom="0px"
              left="0px"
            >
              <Filter />
              <Flex flex={1} p="16px">
                <Routes>
                  <Route path="/:movieId" element={<Movie />}></Route>
                  <Route path="*" element={<LandingPage />}></Route>
                </Routes>
              </Flex>
            </Flex>
          </FilterContext.Provider>
        </ImageConfigurationsContext.Provider>
      </ChakraProvider>
    </Router>
  );
};

export default App;
