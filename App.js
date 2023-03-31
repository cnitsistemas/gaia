import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text } from 'react-native';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Colors, Typography } from 'react-native-ui-lib';
import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold, 
  NunitoSans_300Light 
} from '@expo-google-fonts/nunito-sans';
import { Quicksand_400Regular, Quicksand_700Bold, Quicksand_300Light } from '@expo-google-fonts/quicksand';

Colors.loadColors({
  primary: '#ff843a',
  secondary: '#404040',
});

Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
});

export default function App() {
  let [fontsLoaded] = useFonts({ 
    NunitoSans_400Regular, 
    NunitoSans_700Bold, 
    NunitoSans_300Light,
    Quicksand_400Regular,
    Quicksand_700Bold,
    Quicksand_300Light
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar backgroundColor={"#ff843a"} barStyle="light-content" />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
