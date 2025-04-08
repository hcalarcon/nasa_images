// components/MediaCard.js
import { Image } from "react-native";

const ImageView = ({ url, mediaType, style }) => {
  const isImage = mediaType === "image";

  return (
    <Image
      style={style}
      source={isImage ? { uri: url } : require("../../assets/logonasa.png")}
    />
  );
};

export default ImageView;
