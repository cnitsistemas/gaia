import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Colors, Typography } from 'react-native-ui-lib';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold, Quicksand_300Light, Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/store';
import MainApp from './src/app'
// import { AxiosInterceptor } from './src/services/apiService';
import Toast from 'react-native-toast-message';
import { NativeBaseProvider, extendTheme } from "native-base";
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

Colors.loadColors({
  primary: '#ff843a',
  secondary: '#404040',
});

Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
});

const theme = extendTheme({
  colors: {
    primary: {
      "50": "#ffffff",
      "100": "#fff8f3",
      "200": "#ffdbc4",
      "300": "#ffbe95",
      "400": "#ffa167",
      "500": "#f99151",
      "600": "#f0823d",
      "700": "#e6732c",
      "800": "#d36623",
      "900": "#b35c27"
    },
    amber: {
      400: '#d97706'
    }
  },
  config: {
    initialColorMode: 'light'
  }
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
    Quicksand_300Light,
    Quicksand_500Medium
  });

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    async function hide() {
      await SplashScreen.hideAsync();
    }

    if (appIsReady) {
      hide();
    }

  }, [appIsReady])

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <NativeBaseProvider theme={theme}>
            <StatusBar backgroundColor={"#ff843a"} barStyle="light-content" />
            <MainApp />
            <Toast />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
