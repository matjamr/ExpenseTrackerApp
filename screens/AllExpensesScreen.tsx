import {Pressable, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackParamList} from "../App";
import {StackNavigationProp} from "@react-navigation/stack";

type homeScreenProp = StackNavigationProp<StackParamList, 'EditExpenseScreen'>;

function AllExpensesScreen() {

    const navigation = useNavigation<homeScreenProp>();

    return <View>
        <Text>ALL EXPENSES SCREEN</Text>
        <Pressable onPress={() => {
            navigation.navigate('EditExpenseScreen')
        }
        }>
            <Text>Haa</Text>
        </Pressable>
    </View>
}


export default AllExpensesScreen