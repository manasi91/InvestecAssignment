import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  NativeModules
} from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';


export default class App extends React.PureComponent {

  render() {
    return (
        <AppNavigator/>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    padding: 30
  }
});