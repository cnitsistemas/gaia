import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "../pages/TabNavigation";
import Frequency from "../pages/Frequency";
import { customQuicksandFontBoldUI } from "../utils/fontsUi";
import PerformFrequency from "../pages/PerformFrequency";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import ChooseRoute from "../pages/ChooseRoute";
import Notifications from "../pages/Notifications";

const Stack = createNativeStackNavigator();

export default function Routes(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseRoute"
        component={ChooseRoute}
        options={{
          title: "Selecição de rota",
          headerStyle: {
            backgroundColor: "#32386f",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            ...customQuicksandFontBoldUI,
          },
        }}
      />
      <Stack.Screen
        name="Frequency"
        component={Frequency}
        options={{
          title: "Frequência",
          headerStyle: {
            backgroundColor: "#32386f",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            ...customQuicksandFontBoldUI,
          },
        }}
      />
      <Stack.Screen
        name="PerformFrequency"
        component={PerformFrequency}
        options={{
          title: "Realizar Frequência",
          headerStyle: {
            backgroundColor: "#32386f",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            ...customQuicksandFontBoldUI,
          },
        }}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{
          title: "Politica de privacidade",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#32386f",
          headerTitleStyle: {
            ...customQuicksandFontBoldUI,
          },
        }}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{
          title: "Termos e condições",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#32386f",
          headerTitleStyle: {
            ...customQuicksandFontBoldUI,
          },
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "Notificações",
          headerStyle: {
            backgroundColor: "#32386f",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            ...customQuicksandFontBoldUI,
          },
        }}
      />
    </Stack.Navigator>
  );
}
