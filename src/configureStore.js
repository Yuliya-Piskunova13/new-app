import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import authReducer from '../src/modules/Auth/reducers';

const config = {
  key: 'CSMobile',
  storage: AsyncStorage,
  whitelist: ['token', 'portfolios'],
};

export default () => {
  let store;

  const appReducer = persistCombineReducers(config, authReducer);

  store = createStore(appReducer);

  const persistor = persistStore(store);

  return {persistor, store};
};
