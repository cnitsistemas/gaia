import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { customQuicksandFontBoldUI } from "../../utils/fontsUi";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    description:{
        ...customQuicksandFontBoldUI,
        fontSize: 16,
        color: Colors.bag6Bg,
        marginVertical: 10
    },
    text: {
        fontSize: 14,
        color: "#acacac",
        textAlign: 'justify',
        marginHorizontal: 30

    }
});