import { StyleSheet } from "react-native";
import {
  customQuicksandFontBoldUI,
  customQuicksandFontRegularUI,
} from "../../utils/fontsUi";

export const styles = StyleSheet.create({
  buttonCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    resizeMode: "cover",
    height: "70%",
    width: "100%",
  },
  text: {
    ...customQuicksandFontBoldUI,
    fontSize: 23,
    paddingHorizontal: 23,
    color: "#32386f",
    textAlign: "center",
  },
  subtitle: {
    ...customQuicksandFontRegularUI,
    color: "#a5a5a5",
    paddingLeft: 23,
    paddingRight: 23,
    textAlign: "center",
  },
});
