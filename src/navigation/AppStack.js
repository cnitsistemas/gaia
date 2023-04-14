import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from '../pages/TabNavigation';
import Frequency from '../pages/Frequency';
import { customQuicksandFontBoldUI } from '../utils/fontsUi';

const Stack = createNativeStackNavigator();

export default function Routes(props) {
    console.log(props);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabNavigation"
                component={TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Frequency"
                component={Frequency}
                options={{
                    title: 'Frequência',
                    headerStyle: {
                      backgroundColor: '#ff843a',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        ...customQuicksandFontBoldUI,
                    },
                  }}
            />
        </Stack.Navigator>
    )
}