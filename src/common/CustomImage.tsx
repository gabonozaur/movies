import { Image, ImageProps } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ImageConfigurationsContext } from "../App";

interface CustomImageProps extends ImageProps {
  path?: "poster" | "backdrop";
}

const CustomImage: React.FC<CustomImageProps> = ({ src, path, ...props }) => {
  const { configurations } = useContext(ImageConfigurationsContext);

  return (
    <Image
      loading="lazy"
      src={
        path
          ? `${configurations?.base_url}${
              configurations?.[`${path}_sizes`]?.[0]
            }${src}`
          : src
      }
      {...props}
    />
  );
};

export default CustomImage;
