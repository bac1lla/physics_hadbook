import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const Navbar = () => {

  return (
    <View style={styles.navbar}>

      {res.map(tab => {
        return (
          <TouchableOpacity style={styles.navItem} data-index={0}>
            <Image
              style={styles.navImg} source={tab.uri}>
            </Image>
            <Text style={styles.navText}>{tab.text}</Text>
          </TouchableOpacity>
        )
      })}

    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    // height: 70,

  },
  navItem: {
    alignItems: 'center',
    flex: 0,
  },
  navImg: {
    width: 32,
    height: 32,
    marginBottom: 0,
  },
  navText: {
    color: '#fff',
    fontSize: 14
  }
})

const res = [
  {
    uri: require('./res/drawble/frequency.png'),
    text: 'Таблица',
  },
  {
    uri: require('./res/drawble/theory.png'),
    text: 'Теория',
  },
  {
    uri: require('./res/drawble/formula.png'),
    text: 'Формулы',
  },
]
