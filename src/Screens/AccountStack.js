import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from './Account';
import Orders from './Orders';
import Wallet from './Wallet';

const Stack = createNativeStackNavigator();
class AccountStack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Wallet" component={Wallet} />
      </Stack.Navigator>
      //   </NavigationContainer>
    );
  }
}

//const styles = StyleSheet.create({});

export default AccountStack;
