import {Pressable, StyleSheet, Text, View} from "react-native";
import {FULL_DARK_BLUE, HALF_DARK_BLUE, WHITE} from "../assets/colors";
import globalStyles from "../styles/GlobalStyles";
import {useNavigation} from "@react-navigation/native";

interface ExpenseRecord {
    id: number,
    name: string,
    date: string,
    price: number,
    onPress: any
}

function ExpenseRecord({id, name, date, price, onPress}: ExpenseRecord) {

    const navigation = useNavigation();

    return <Pressable
            onPress={() => {
                // @ts-ignore
                navigation.navigate('ManageExpense', {
                    expenseId: id
                });
            }}
            style={({pressed}) => pressed && globalStyles.pressed}
        >
        <View style={styles.expen_details}>
            <View style={styles.expen_details_inner}>
                <Text style={{color: 'white'}}>{name}</Text>
                <Text style={{color: 'white'}}>{date}</Text>
            </View>
            <View style={styles.expen_details_price}>
                <Text style={styles.expen_details_price_text}>{price}</Text>
            </View>
        </View>
    </Pressable>

}

const styles = StyleSheet.create({
    expen_details: {
        backgroundColor: HALF_DARK_BLUE,
        margin: 8,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 13,
        height: 70
    },
    expen_details_inner: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    expen_details_price: {
        backgroundColor: WHITE,
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
        width: 70
    },
    expen_details_price_text: {
        backgroundColor: WHITE,
        textAlign: "center"
    }
})

export default ExpenseRecord;