import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from "./source/Navbar";
import {Theory} from "./source/Theory";
import {Kin} from "./source/res/text/text";


export default function App() {



  return (
    <View style={styles.container}>
      <Theory />
      {/*<Kin />*/}
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
