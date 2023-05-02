import AntDesign from "react-native-vector-icons/AntDesign";
import {Pressable, StyleSheet} from "react-native";
import globalStyles from "../styles/GlobalStyles";
import {useNavigation} from "@react-navigation/native";

function IconButton() {

    const navigate = useNavigation();

    const press = () => {
        // @ts-ignore
        navigate.navigate('ManageExpense');
    }


    return <Pressable
            style={({pressed}) => pressed && globalStyles.pressed}
        >
        <AntDesign
            name='plus'
            size={25}
            style={styles.plusStyle}
            onPress={press}
        />
    </Pressable>
}

const styles = StyleSheet.create({
    plusStyle: {
        padding: 10
    }
})

export default IconButton;