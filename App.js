import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {Theory} from "./source/Theory";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Formula} from "./source/Formula";
import {Tables} from "./source/Tables";

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
  <NavigationContainer headerMode="none">
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#222"
      barStyle={styles.navbar}
    >


      <Tab.Screen
        name="Table"
        component={Tables}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              style={styles.navImg}
              source={require('./source/res/drawble/frequency.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Home"
        component={Theory}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              style={styles.navImg}
              source={require('./source/res/drawble/home.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Formula"
        component={Formula}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              style={styles.navImg}
              source={require('./source/res/drawble/formula.png')}
            />
          )
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    backgroundColor: '#ddd',
    color: '#ddd',
  },
  navImg: {
    width: 32,
    height: 32,
  },
});
