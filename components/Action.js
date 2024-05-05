import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Action = () => (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <FontAwesome5 name="cog" size={32} color="#D4DFEA" />
            <View style={styles.textContainer}>
                <Text style={styles.label}>Mutual Funds Investment</Text>
                <Text style={styles.subLabel}>Aditya Birla Fund</Text>
            </View>
        </View>
        <Text style={styles.amount}>₹100</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    leftContainer:{
        flexDirection: "row",
        alignItems: "center",
    },
    textContainer: {
        marginLeft: 16,
    },
    label: {
        color: "#D4DFEA",
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 2,
    },
    subLabel: {
        color: "#B6C5D4",
        fontSize: 13,
    },
    amount:{
        fontSize:15,
        fontWeight:"600",
        color:"white",
    },
});

export default Action;
