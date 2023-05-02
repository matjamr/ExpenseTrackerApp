import {View} from "react-native";
import Input from "./Input";

function ExpenseForm() {

    return <View>
        <Input label={"Name"} textInputOptions={{
            autoCorrect: true,
            inputMode: 'text',
        }} />
        <Input label={"Price"} textInputOptions={{}} />
        <Input label={"Date"} textInputOptions={{}} />
    </View>
}

export default ExpenseForm;