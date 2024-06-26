import { Text, View, StyleSheet } from "react-native";

import CashChanged from "../CashChanged";
import GraphButton from "../GraphButton";
import InfoPanel from "../InfoPanel";

const ToolsContent = () => (
    <View style={styles.container}>
        <View style={styles.contentHeader}>
            <CashChanged total="21,867" amountChanged={2.4}/>
            <View style={styles.spaceGraph}><GraphButton /></View>
        </View>
        <View style={styles.panelSpacing}>
            <InfoPanel label="Assets" amount={21867} icon="house-user" positive/>
        </View>
        <InfoPanel label="Liabilities" amount={5670} icon="car"/>
    </View>
);

const styles = StyleSheet.create({
    container: {},
    contentHeader:{
        flexDirection: "row",

    },
    spaceGraph:{
        marginLeft:24,
    },
    panelSpacing:{
        paddingVertical:20,
    },
});

export default ToolsContent;
