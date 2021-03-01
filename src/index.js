/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar, Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import ButtonComponent from './component/Button/component/Button'
import {store} from './redux/store';

class App extends PureComponent {

  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor={'black'}/>
        <Provider store={store}>
        <ButtonComponent />
        </Provider>
      </SafeAreaView>
    )
  }
}

export default App;

Text.defaultProps = {}
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = {}
TextInput.defaultProps.allowFontScaling = false;