import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';
import { StyleSheet, Text, View } from 'react-native';

//import Router from './Router';

class App extends Component {

  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      // <Provider store={store}>
      //    <Text>TESTE TESTE</Text>
      // </Provider>
      <View >
      <Text >
        Welcome to React Native!
      </Text>
      </View>
    );
  }
}

export default App;
