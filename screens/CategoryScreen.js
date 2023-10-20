import { FlatList } from "react-native";
import { CATEGORIES } from "../data/GeniusKnowledge-data";
import CategoryGridTile from "../components/CategoryGridTitle";

export default function CategoryScreen({ navigation }) {

  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate("GeniusKnowledgesOverview",{ categoryId: itemData.item.id });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
       onPress={pressHandler}       
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={1}
    />
  );
}
