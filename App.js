import React from 'react';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Portal from '@burstware/react-native-portal';

import AppPage from './src/components/appPage';

const App = () => {
  return (
    <Provider store={store} >
      <NativeRouter>
        <Portal.Host>
          <AppPage />
        </Portal.Host>
      </NativeRouter>
    </Provider>
  )
}

export default App;