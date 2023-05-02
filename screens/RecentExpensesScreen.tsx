import {FlatList, StyleSheet, View} from "react-native";
import {FULL_DARK_BLUE, HALF_DARK_BLUE, WHITE} from "../assets/colors";
import ExpenseRecord from "../components/ExpenseRecord";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackParamList} from "../App";
import ExpensesHeader from "../components/ExpensesHeader";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context.";

type homeScreenProp = StackNavigationProp<StackParamList, 'EditExpenseScreen'>;

function RecentExpensesScreen() {

    const { expenses} = useContext(ExpensesContext);
    const navigation = useNavigation<homeScreenProp>();

    const expenses_7_days = expenses.filter(expense => {
        return (new Date(expense.date).getTime() + (7 * 24 * 60 * 60 * 1000)) > Date.now()
    })


    return <View style={styles.container}>
        <ExpensesHeader headerText={"Last 7 days"} dataToSum={expenses_7_days} />
        <FlatList
            data={expenses_7_days}
            keyExtractor={item => item.id.toString()}
            renderItem={(item) => {
                return <ExpenseRecord id={item.item.id}
                                      name={item.item.name}
                                      price={item.item.price}
                                      date={item.item.date}
                                      onPress={() => navigation.navigate('MyModal')}
                />
            }}
        />
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

export default RecentExpensesScreen