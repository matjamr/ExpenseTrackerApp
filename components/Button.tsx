import {Pressable, StyleSheet, Text, View} from "react-native";
import {HALF_DARK_BLUE, WHITE} from "../assets/colors";
import globalStyles from "../styles/GlobalStyles";

type ButtonProps = {
    text: string,
    onPress: any,
    style?: object,
    mode?: string
}

function Button({text, onPress, style, mode} : ButtonProps) {

    return <Pressable
            style={({pressed}) => [style,
                styles.main,
                pressed && globalStyles.pressed,
                mode === 'tint' && styles.tinned]}
            onPress={onPress}
    >
        <View>
            <Text style={styles.text} >
                {text}
            </Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    text: {
        color: WHITE,
        textAlign: "center"
    },
    main: {
        flex: 1,
        height: 40,
        margin: 15,
        borderRadius: 7,
        backgroundColor: HALF_DARK_BLUE,
        opacity: 0.9,
        justifyContent: "center"
    },
    tinned: {
        opacity: 0.3
    }
})

export default Button;