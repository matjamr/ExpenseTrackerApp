import {Text, TextInput, View} from "react-native";

type InputProps = {
    label: string,
    textInputOptions?: any
}

function Input({label, textInputOptions}: InputProps) {
    return <View>
        <Text>{label}</Text>
        <TextInput {...textInputOptions} />
        </View>
}

export default Input;