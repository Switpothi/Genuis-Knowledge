import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  IconButton,
  TouchableOpacity,
} from "react-native";
import Subtitle from "../components/Subtitle";
import Details from "../components/Details";
import { GENIUSKNOWLEDGES } from "../data/GeniusKnowledge-data";

import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Description from "../components/Description";
import { Link } from "@react-navigation/native";
import { Linking } from "react-native";

import { WebView } from "react-native-webview";

import GeniusKnowledge from "../models/GeniusKnowledge";

export default function DetailScreen({ route, navigation }) {
  const GeniusKnowledgeId = route.params.GeniusKnowledgeId;
  const selectedGeniusKnowledge = GENIUSKNOWLEDGES.find(
    (GeniusKnowledge) => GeniusKnowledge.id === GeniusKnowledgeId
  );

  const getTitle = () => {
    if (selectedGeniusKnowledge.categoryIds.includes("lv1")) return "Country";
    else if (selectedGeniusKnowledge.categoryIds.includes("lv2"))
      return "Tourist attractions";
    else if (selectedGeniusKnowledge.categoryIds.includes("lv3"))
      return "Continent";
    else if (selectedGeniusKnowledge.categoryIds.includes("lv4")) return "Pet";
    else if (selectedGeniusKnowledge.categoryIds.includes("lv5"))
      return "Exotic Pet";
    else return "";
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name="star"
            size={32}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  function headerButtonPressHandler() {
    navigation.navigate("AboutScreen");
  }
  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={{ uri: selectedGeniusKnowledge.imageUrl }}
      />
      <Text style={styles.title}>{selectedGeniusKnowledge.title}</Text>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>
            {getTitle()} : {selectedGeniusKnowledge.title}{" "}
          </Subtitle>
          <Subtitle>Description </Subtitle>
          <Description>{selectedGeniusKnowledge.desc}</Description>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 250,
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#de6560",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },

  listContainer: {
    width: "80%",
  },
});
