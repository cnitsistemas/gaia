import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { customQuicksandFontBoldUI, customQuicksandFontRegularUI } from "../../utils/fontsUi";

export const styles = StyleSheet.create({
    session: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.newGray,
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
    },
    textActions: {
        ...customQuicksandFontBoldUI,
        color: Colors.bag6Bg,
    },
    textActionsLong: {
        ...customQuicksandFontBoldUI,
        color: Colors.bag6Bg,
        maxWidth: 200,
    },
    container: {
        flex: 1,
        padding: 25
    },
    containerSessions: {
        marginTop: 40
    },
    primaryText: {
        ...customQuicksandFontBoldUI,
        fontSize: 18,
    },
    secondaryText: {
        ...customQuicksandFontRegularUI,
        fontSize: 13,
        color: Colors.bag6Bg
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
    footer: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 80
    },
    footerText:{
        ...customQuicksandFontRegularUI,
        fontSize: 12,
        color: Colors.bag6Bg,
    }
});