import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text } from 'react-native';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Colors } from 'react-native-ui-lib';

Colors.loadColors({
  primary: '#ff843a',
  secondary: '#404040',
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor={"#ff843a"} barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
