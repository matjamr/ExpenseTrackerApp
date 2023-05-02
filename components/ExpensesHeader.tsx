import {StyleSheet, Text, View} from "react-native";

interface Expense {
    name: string,
    price: number,
    date: string
}

interface ExpensesHeaderInterface {
    headerText: string,
    dataToSum: Expense[]
}

function ExpensesHeader({ headerText, dataToSum }: ExpensesHeaderInterface) {
    return (
        <View style={styles.header}>
            <Text>{headerText}</Text>
            <Text>{dataToSum.map(exp => exp.price)
                .reduce((partialSum, a) => partialSum + a, 0)}$</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffeedd',
        borderRadius: 5,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    }
});

export default ExpensesHeader;