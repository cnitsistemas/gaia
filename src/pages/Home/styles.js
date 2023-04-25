import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { customQuicksandFontBoldUI } from "../../utils/fontsUi";

export const styles = StyleSheet.create({
    containerActions: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end'
    },
    actions: {
        height: 120,
        flex: 1,
        backgroundColor: Colors.primary,
        marginBottom: 70,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    actionsDisable: {
        opacity: .5,
        height: 120,
        flex: 1,
        backgroundColor: Colors.primary,
        marginBottom: 70,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    textActions: {
        ...customQuicksandFontBoldUI,
        color: Colors.white,
    },
    container: {
        flex: 1,
        padding: 25
    },
    primaryText: {
        ...customQuicksandFontBoldUI,
        fontSize: 26,
    },
    secondaryText: {
        ...customQuicksandFontBoldUI,
        fontSize: 12,
        color: "#acacac"
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: '100%',
        marginTop: 30
    },
    headerText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
    },
    headerImg: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    img: {
        height: 62,
        width: 62,
        borderRadius: 50
    },
});