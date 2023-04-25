import { StyleSheet } from "react-native";
import { customQuicksandFontBoldUI } from "../../utils/fontsUi";

export const styles = StyleSheet.create({
    main: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center'
    },
    container: {
      flex: 1,
    },
    img: {
      resizeMode: "contain",
      height: "25%",
      width: "100%",
      marginBottom: 50
    },
    form: {
      paddingHorizontal: 30
    },
    welcomeContainer: {
      marginBottom: 3
    },
    welcomeText: {
      ...customQuicksandFontBoldUI,
      fontSize: 26,
      textAlign: "center"
    },
    welcomeSubtext: {
      ...customQuicksandFontBoldUI,
      fontSize: 16,
      textAlign: "center",
      color: "#acacac"
    },
    buttonLoading:{
      marginTop: 20,
      height: 60,
    },
    buttonSubimit: {
      marginTop: 20,
      height: 60,
    }
  });