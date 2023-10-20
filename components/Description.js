import { View, Text, StyleSheet } from 'react-native';

export default function Description({ children }) {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    descriptionTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight:'normal',
        textAlign: 'left',
        
    },
    descriptionContainer: {
        padding: 15,
        marginHorizontal: 12,
        marginVertical: 4,

       
    },
});