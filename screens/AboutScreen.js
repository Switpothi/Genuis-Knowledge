import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  IconButton,
  route,
} from "react-native";
import GeniusKnowledge from "../models/GeniusKnowledge";
import { GeniusKnowledges } from "../data/GeniusKnowledge-data";
import WebView from "react-native-webview";
import { useState } from "react";
export default function AboutScreen() {
  const [url, setUrl] = useState(""); // State to hold the URL

  const changeURL = (newURL) => {
    setUrl(newURL);
  };
  function handleExitButtonClick() {
    BackHandler.exitApp(); // Exit the app when the button is clicked
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 250,
          backgroundColor: "lightgray",
          flexDirection: "column",
        }}
      >
        <ScrollView>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Turkey")}
          >
            Turkey Click !
          </Text>
          <Text
            onPress={() =>
              changeURL("https://en.wikipedia.org/wiki/United_Kingdom")
            }
          >
            United Kingdom Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Germany")}
          >
            Germany Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/England")}
          >
            England Click !
          </Text>
          <Text onPress={() => changeURL("https://en.wikipedia.org/wiki/Iran")}>
            Iran Click !
          </Text>
          <Text
            onPress={() =>
              changeURL("https://en.wikipedia.org/wiki/Manchester")
            }
          >
            Manchester Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Istanbul")}
          >
            Istanbul Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Paris")}
          >
            Paris Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Tokyo")}
          >
            Tokyo Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Dubai")}
          >
            Dubai Click !
          </Text>
          <Text onPress={() => changeURL("https://en.wikipedia.org/wiki/Asia")}>
            Asia Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Australia")}
          >
            Australia Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Europe")}
          >
            Europe Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Africa")}
          >
            Africa Click !
          </Text>
          <Text
            onPress={() =>
              changeURL("https://en.wikipedia.org/wiki/North_America")
            }
          >
            North America Click !
          </Text>
          <Text
            onPress={() =>
              changeURL("https://en.wikipedia.org/wiki/South_America")
            }
          >
            South America Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Antartica")}
          >
            Antartica Click !
          </Text>
          <Text onPress={() => changeURL("https://en.wikipedia.org/wiki/Dog")}>
            Dog Click !
          </Text>
          <Text onPress={() => changeURL("https://en.wikipedia.org/wiki/Cat")}>
            Cat Click !
          </Text>
          <Text onPress={() => changeURL("https://en.wikipedia.org/wiki/Bird")}>
            Birds Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Rabbit")}
          >
            Rabbit Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Hamster")}
          >
            Hamster Click !
          </Text>
          <Text
            onPress={() =>
              changeURL("https://en.wikipedia.org/wiki/Sugar_Glider")
            }
          >
            Sugar Glider Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Talantula")}
          >
            Talantula Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Raccoon")}
          >
            Raccoon Click !
          </Text>
          <Text
            onPress={() =>
              changeURL("https://en.wikipedia.org/wiki/Corn_Snake")
            }
          >
            Corn Snake Click !
          </Text>
          <Text
            onPress={() => changeURL("https://en.wikipedia.org/wiki/Ferret")}
          >
            Ferret Click !
          </Text>
        </ScrollView>
      </View>

      <WebView source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  textUrl: {
    fontSize: 24,
  },
});
