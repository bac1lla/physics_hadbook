import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as FormRes from './res/FormulaComponents'
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Формулы" component={HomeScreen}/>
    </MainStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.formula}>
        {resources.map(card => {
          return (
            <TouchableOpacity key={card.key} style={[styles.card]}
                              onPress={() => navigation.navigate(`${card.key}`)}>
              <View><Text style={styles.cardText}>{card.text}</Text></View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}


export const Formula = () => {


  return (

    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={MainStackScreen}/>
      <RootStack.Screen name="Speed1" component={FormRes.Speed}/>
      <RootStack.Screen name="Speed2" component={FormRes.Speed}/>
      <RootStack.Screen name="Speed3" component={FormRes.Speed}/>
      <RootStack.Screen name="Speed4" component={FormRes.Speed}/>
      <RootStack.Screen name="Speed5" component={FormRes.Speed}/>
      <RootStack.Screen name="Speed6" component={FormRes.Speed}/>
      <RootStack.Screen name="Speed7" component={FormRes.Speed}/>
      <RootStack.Screen name="Speed8" component={FormRes.Speed}/>

    </RootStack.Navigator>

  )
}


const styles = StyleSheet.create({
  formula: {
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    width: width,
    height: 45,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#FFB6C1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
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
    color: '#000'
  }
})

const resources = [
  {
    key: 'Speed1',
    uri: require('./res/drawble/kinematics.png'),
    text: 'Кинематика',
    color: styles.red,
  },
  {
    key: 'Speed2',
    uri: require('./res/drawble/dinamic.png'),
    text: 'Динамика',
    color: styles.blue,
  },
  {
    key: 'Speed3',
    uri: require('./res/drawble/static.png'),
    text: 'Статика и гидростатика',
    color: styles.green,
  },
  {
    key: 'Speed4',
    uri: require('./res/drawble/zse.png'),
    text: 'Законы сохранения в механике',
    color: styles.yellow,
  },
  {
    key: 'Speed5',
    uri: require('./res/drawble/koleb.png'),
    text: 'Механические колебания',
    color: styles.red,
  },
  {
    key: 'Speed6',
    uri: require('./res/drawble/mol.png'),
    text: 'Молекулярно-Кинетическая теория',
    color: styles.blue,
  },
  {
    key: 'Speed7',
    uri: require('./res/drawble/term.png'),
    text: 'Термодинамика',
    color: styles.green,
  },
  {
    key: 'Speed8',
    uri: require('./res/drawble/elec.png'),
    text: 'Электростатика',
    color: styles.yellow,
  },
]
