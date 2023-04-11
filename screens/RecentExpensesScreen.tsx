import {StyleSheet, Text, View} from "react-native";
import {FULL_DARK_BLUE, HALF_DARK_BLUE, WHITE} from "../assets/colors";
import {EXPENSES} from "../data/expenses";

function RecentExpensesScreen() {

    const {name, price, date} = EXPENSES[0]

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text>Last 7 days</Text>
            <Text>$78.96</Text>
        </View>
        <View style={styles.expen_details}>
            <View style={styles.expen_details_inner}>
                <Text style={{color: 'white'}}>{name}</Text>
                <Text style={{color: 'white'}}>{date}</Text>
            </View>
            <View style={styles.expen_details_price}>
                <Text style={styles.expen_details_price_text}>{price}</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: FULL_DARK_BLUE,
        flex: 1,
        padding: 10,
    },
    header: {
        backgroundColor: '#ffeedd',
        borderRadius: 5,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    },
    expen_details: {
        backgroundColor: HALF_DARK_BLUE,
        margin: 8,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        height: 70
    },
    expen_details_inner: {
        flexDirection: "column"
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

export default RecentExpensesScreen