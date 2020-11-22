import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';

export const Theory = () => {

  return (
    <SafeAreaView >
    <ScrollView contentContainerStyle={styles.theory}>

      {res.map(card => {
        return (
          <TouchableOpacity key={card.key} style={[styles.card, card.color]}>
            <Image
              style={styles.cardImg}
              source={card.uri} />
            <Text style={styles.cardText}>{card.text}</Text>
          </TouchableOpacity>
        )
      })}

    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  theory: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 40,
    paddingBottom: 20,
  },
  card: {
    width: 170,
    height: 200,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15
  },
  yellow: {
    backgroundColor: '#FFC0CB',
  },
  green: {
    backgroundColor: '#FFB6C1',
  },
  blue: {
    backgroundColor: '#FF69B4',
  },
  red: {
    backgroundColor: '#FF1493',
  },
  cardImg: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  cardText: {
    textAlign: 'center',
    color: '#000'
  }
})

const res = [
  {
    key: 'kin',
    uri: require('./res/drawble/kinematics.png'),
    text: 'Кинематика',
    color: styles.red,
  },
  {
    key: 'din',
    uri: require('./res/drawble/dinamic.png'),
    text: 'Динамика',
    color: styles.blue,
  },
  {
    key: 'stat',
    uri: require('./res/drawble/static.png'),
    text: 'Статика и гидростатика',
    color: styles.green,
  },
  {
    key: 'zse',
    uri: require('./res/drawble/zse.png'),
    text: 'Законы сохранения в механике',
    color: styles.yellow,
  },
  {
    key: 'kol',
    uri: require('./res/drawble/koleb.png'),
    text: 'Механические колебания',
    color: styles.red,
  },
  {
    key: 'mol',
    uri: require('./res/drawble/mol.png'),
    text: 'Молекулярно-Кинетическая теория',
    color: styles.blue,
  },
  {
    key: 'term',
    uri: require('./res/drawble/term.png'),
    text: 'Термодинамика',
    color: styles.green,
  },
  {
    key: 'elec',
    uri: require('./res/drawble/elec.png'),
    text: 'Электростатика',
    color: styles.yellow,
  },
]
