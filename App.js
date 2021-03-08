import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store';
import AppNavigator from './src/navigators/AppNavigator';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator/>
            </PersistGate>
          </Provider>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
