import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from "react-native";
import Layout from "./layout";
import { useRoute } from "@react-navigation/native";
import translate from "translate";
import { useEffect, useState } from "react";
import ImageView from "../components/imageView";

export default Detalle = ({ navigation }) => {
  const {
    params: { url, title, desc, date, mediaType },
  } = useRoute();

  const [translatedDesc, setTranslatedDesc] = useState("");
  const isVideo = mediaType === "video";

  const handleOpenLink = () => {
    Linking.openURL(url);
  };

  useEffect(() => {
    // Traduce el texto de la descripción
    const translateDescription = async () => {
      try {
        // Utiliza la función translate de la librería translate para traducir el texto
        const translatedText = await translate(desc, { from: "en", to: "es" });
        setTranslatedDesc(translatedText);
      } catch (error) {
        console.error("Error translating description:", error);
      }
    };

    translateDescription();
  }, [desc]);

  return (
    <Layout>
      <Text style={styles.titulo}>{title}</Text>

      <Text style={{ color: "white" }}>{date}</Text>
      <View style={styles.imagenConainer}>
        <ImageView url={url} mediaType={mediaType} style={styles.img} />
      </View>
      {isVideo && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontStyle: "italic", color: "#555" }}>
            Este contenido es un video.
          </Text>
          <Button title="Ver en YouTube" onPress={handleOpenLink} />
        </View>
      )}
      <ScrollView style={{ marginVertical: 10, height: "100%" }}>
        <View style={styles.descripcionContainer}>
          <Text style={styles.descripcion}>{translatedDesc}</Text>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },
  descripcion: {
    color: "white",
    fontSize: 15,
    textAlign: "justify",
  },
  img: {
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 15,
    marginVertical: 5,
  },
  descripcionContainer: {
    paddingTop: 15,
    height: "100%",
  },
  imagenConainer: {
    height: 320,
  },
});
