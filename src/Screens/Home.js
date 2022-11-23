import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from './Account';
import Beauty from './Beauty';
import Orders from './Orders';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Beauty"
          component={Beauty}
          options={{
            tabBarLabel: 'Beauty',
            tabBarIcon: ({color, size}) => (
              <Image
                style={styles.icon}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-nintendo-24.png')}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Offers"
          component={Beauty}
          options={{
            tabBarLabel: 'Offers',
            tabBarIcon: ({color, size}) => (
              <Image
                style={styles.icon}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-badge-32.png')}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Categories"
          component={Beauty}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({color, size}) => (
              <Image
                style={styles.icon}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-menu-64.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Stream"
          component={Beauty}
          options={{
            tabBarLabel: 'Stream',
            tabBarIcon: ({color, size}) => (
              <Image
                style={styles.icon}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-record-30.png')}
              />
            ),
          }}
        />

        <Tab.Screen
          name="AccountStack"
          component={AccountStack}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <Image
                style={styles.icon}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-user-32.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Home;
const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
  },
});
