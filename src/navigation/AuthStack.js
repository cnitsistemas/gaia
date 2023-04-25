import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingIn from '../pages/SingIn';

const Stack = createNativeStackNavigator();

export default function AuthStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}