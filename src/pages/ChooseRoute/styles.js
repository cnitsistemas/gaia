import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { customQuicksandFontMediumUI } from "../../utils/fontsUi";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    dateLebel: {
        fontSize: 14,
        marginLeft: 15,
        color: "#acacac"
    },
    date: {
        fontSize: 16,
        color: Colors.darkGray,
        borderColor: '#ff843a',
        borderBottomWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        paddingHorizontal: 15
    },
    headerDialog: {
        fontSize: 15,
        color: Colors.primary,
        margin: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    textDialog: {
        fontSize: 15,
        color: Colors.bag6Bg,
        marginBottom: 10
    },
    action: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#8B93A5',
        padding: 10,
        borderRadius: 6,
        marginTop: 50,
    },
    buttonSubimit: {
        marginTop: 3,
        marginBottom: 20,
        height: 60,
    },
    description: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    textDescription: {
        ...customQuicksandFontMediumUI,
        textAlign: 'justify',
        fontSize: 14,
        color: Colors.clearBlack,
    },
    textDialog: {
        ...customQuicksandFontMediumUI,
    }
});