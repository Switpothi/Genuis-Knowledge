import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}
export default Subtitle;
const styles = StyleSheet.create({
    subtitle: {
        color: '#a8e8f9',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#ded6ce',
        borderBottomWidth: 2,
    },
});