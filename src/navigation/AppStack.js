import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from '../pages/TabNavigation';

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
        </Stack.Navigator>
    )
}