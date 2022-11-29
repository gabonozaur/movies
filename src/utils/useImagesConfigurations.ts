import { useEffect, useState } from "react";
import { apiClient, apiKey } from "./apiClient";
import { ImageConfigurationDTO, UseImagesConfigurations } from "./types";

const useImagesConfigurations = (): UseImagesConfigurations => {
  const [fetchingConfigurations, setFetchingConfigurations] = useState(false);
  const [configurations, setConfigurations] = useState<ImageConfigurationDTO>();
  const fetchConfiguration = async () => {
    try {
      setFetchingConfigurations(true);
      const res = await apiClient.get(`/configuration?api_key=${apiKey}`);
      console.log("res is", res);
      setConfigurations(res.data.images);
    } catch (e) {
      //something for handling error
    }
    setFetchingConfigurations(false);
  };

  useEffect(() => {
    fetchConfiguration();
  }, []);

  return { configurations, fetchingConfigurations };
};

export default useImagesConfigurations;
