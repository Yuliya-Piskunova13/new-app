import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Platform, UIManager} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import configureStore from './configureStore';
import NavigationProvider from './navigation';

const {store, persistor} = configureStore();

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  let [token, setToken] = useState(false);

  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('key');
      if (jsonValue) {
        setToken(true);
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
    setToken(true);
  };

  useEffect(() => {
    getMyObject();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationProvider token={token} />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
