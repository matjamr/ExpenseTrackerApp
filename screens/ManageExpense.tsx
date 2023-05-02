import {StyleSheet, View} from "react-native";
import {useContext, useLayoutEffect} from "react";
import {FULL_DARK_BLUE} from "../assets/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import globalStyles from "../styles/GlobalStyles";
import Button from "../components/Button";
import {ExpensesContext} from "../store/expenses-context.";

// @ts-ignore
function ManageExpense({navigation, route}) {

    const {
        addExpense,
        deleteExpense,
        updateExpense
    } = useContext(ExpensesContext)

    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    const addHandler = () => {
        addExpense({id: Math.random(), name: 'aa', price: 12.2, date: '2024-2-15'});
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const updateHandler = () => {
        updateExpense(expenseId, {name: "UPDATED COS", price: 69.69, date: "2021-02-2"})
        navigation.goBack()
    }

    const removeHandler = () => {
        deleteExpense(expenseId)
        navigation.goBack()
    }


    return (
        <View style={styles.container}>
            <View style={styles.buttonArea}>
                <Button
                    text={'Cancel'}
                    onPress={cancelHandler}
                    mode={'tint'}
                />
                {isEditing
                    ?
                    <Button
                        text={'Update'}
                        onPress={updateHandler}
                    />
                    :
                    <Button
                        text={'Add'}
                        onPress={addHandler}
                    />
                }

            </View>

            {isEditing &&
                <>
                    <View style={globalStyles.line}/>
                    <AntDesign
                        name={"delete"}
                        size={30}
                        style={styles.icon}
                        onPress={removeHandler}
                    />
                </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: FULL_DARK_BLUE,
        flex: 1,
        alignItems: "center",
        padding: 15
    },
    icon: {
        color: '#C23535',
    },
    buttonArea: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default ManageExpense;