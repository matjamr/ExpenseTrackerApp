import {StyleSheet} from "react-native";
import {WHITE} from "../assets/colors";

const globalStyles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    line: {
        height: 0.3,
        margin: 15,
        width: '100%',
        backgroundColor: WHITE,
    }
});


export default globalStyles;