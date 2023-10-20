import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

import Details from "./Details";
import { GeniusKnowledges } from "../data/GeniusKnowledge-data";

function Item({ id, title,desc,imageUrl,linkURL}) {

  const navigation = useNavigation();
  
  function selectItemHandler() {
    navigation.navigate('Details', {
      GeniusKnowledgeId: id,
    });
  }
  return (
    <View style={styles.Item}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}

        onPress={selectItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text>{linkURL}</Text>
          </View>

           <Details
            title={title}
            desc={desc}
            imageUrl={imageUrl}
          /> 

        </View>
      </Pressable>
    </View>
  );
}
export default Item;
const styles = StyleSheet.create({
  Item: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {

    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});