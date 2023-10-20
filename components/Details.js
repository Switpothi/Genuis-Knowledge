import { View, Text, StyleSheet } from 'react-native';

function Details({ title, desc ,style, textStyle}) {

   
    return (
        <View style={[styles.details, style]}>

            <Text style={[styles.detailItem, textStyle]}>
                {title}
            </Text>
            <Text style={[styles.detailItem, textStyle]}>
                {desc}
            </Text>
        </View>
    );
}
export default Details;
const styles = StyleSheet.create({
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