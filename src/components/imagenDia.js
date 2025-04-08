import { StyleSheet, Text, View } from "react-native";
import Link from "./link";
import ImageView from "./imageView";

export default Card = ({ Data, onPres }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{Data.title}</Text>
      <ImageView
        url={Data.url}
        mediaType={Data.media_type}
        style={styles.img}
      />
      <Text style={styles.texto}>{Data.date}</Text>
      <Link texto="Detalles" onPres={onPres} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    alignSelf: "center",
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  texto: {
    paddingVertical: 5,
    color: "white",
  },
});
