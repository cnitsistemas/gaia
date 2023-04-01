import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';

const Stack = createNativeStackNavigator();

export default function WelcomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}