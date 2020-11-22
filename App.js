import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {Navbar} from "./source/Navbar";
import {Theory} from "./source/Theory";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Kin} from "./source/res/text/text";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Formula} from "./source/Formula";
import {Tables} from "./source/Tables";




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainStackScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Tables}
        options={{
          tabBarLabel: 'Таблицы',
          tabBarIcon: () => (
            <Image
              style={styles.navItem}
              source={require('./source/res/drawble/frequency.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Theory}
        options={{
          tabBarLabel: 'Теория'
        }}
      />
      <Tab.Screen
        style={styles.navItem}
        name="Profile"
        component={Formula}
        options={{
          tabBarLabel: 'Формулы'
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {

  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ddd"
      barStyle={styles.navbar}
    >


      <Tab.Screen
        name="Feed"
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
        name="Profile"
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


    // <NavigationContainer>
    //   <RootStack.Navigator mode="modal" headerMode="none">
    //     <RootStack.Screen name="Main" component={MainStackScreen} />
    //     <RootStack.Screen name="MyModal" component={ModalScreen} />
    //   </RootStack.Navigator>
    // </NavigationContainer>
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


// <View style={styles.container}>
//   <Theory />
//   {/*<Kin />*/}
//   <Navbar />
// </View>
