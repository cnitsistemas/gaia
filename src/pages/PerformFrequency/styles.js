import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    description: {
        marginTop: 20,
        marginBottom: 30,
        paddingHorizontal: 10
    },
    textDescription:{
        fontSize: 14,
        color: Colors.accent,
    }, 
    textNameStudent: {
        fontSize: 15,
        // textTransform: 'uppercase',
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
        marginTop: 20,
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
    frequency: {
        paddingHorizontal: 30
    },
    frequencyRow:{
        paddingVertical: 15
    }
});