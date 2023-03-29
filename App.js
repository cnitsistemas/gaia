import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/redux/store'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff7a2d',
    secondary: '#303030',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor={"#ff7a2d"} barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}
