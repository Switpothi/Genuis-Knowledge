import { View, Text, StyleSheet, FlatList } from "react-native";
import { GENIUSKNOWLEDGES } from "../data/GeniusKnowledge-data";
import Item from "../components/Item";

import { useLayoutEffect } from 'react';
import { CATEGORIES } from "../data/GeniusKnowledge-data";

export default function GeniusKnowledgesOverviewScreen({ route,navigation }) {
  const catId = route.params.categoryId;
  const displayedGeniusKnowledges = GENIUSKNOWLEDGES.filter((Item) => {
    return Item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
    ).title;
    navigation.setOptions({
    title: categoryTitle,
    });
    }, [catId, navigation]);

  function renderItem(itemData) {

    const item = itemData.item;
    const ItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      linkUrl:item.linkUrl,
      
      };
      
    return <Item {...ItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedGeniusKnowledges}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
