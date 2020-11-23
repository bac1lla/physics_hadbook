import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as TabRes from './res/TabsComponents'

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Теория" component={HomeScreen}/>
    </MainStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.theory}>
        {resources.map(card => {
          return (
            <TouchableOpacity key={card.key} style={[styles.card, card.color]}
                              onPress={() => navigation.navigate(`${card.key}`)}>
              <Image
                style={styles.cardImg}
                source={card.uri}/>
              <Text style={styles.cardText}>{card.text}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}


export const Theory = () => {


  return (


    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={MainStackScreen}/>
      <RootStack.Screen name="Kin" component={TabRes.Kin}/>
      <RootStack.Screen name="Din" component={TabRes.Din}/>
      <RootStack.Screen name="Stat" component={TabRes.Stat}/>
      <RootStack.Screen name="Zse" component={TabRes.Zse}/>
      <RootStack.Screen name="Kol" component={TabRes.Kol}/>
      <RootStack.Screen name="Mol" component={TabRes.Mol}/>
      <RootStack.Screen name="Term" component={TabRes.Term}/>
      <RootStack.Screen name="Elec" component={TabRes.Elec}/>
    </RootStack.Navigator>



    // <SafeAreaView >
    // <ScrollView contentContainerStyle={styles.theory}>
    //   <RootStack.Navigator mode="modal" headerMode="none">
    //     <RootStack.Screen name={"Main"} component={MainStackScreen}/>
    //   {res.map(card => {
    //     return (
    //
    //       <TouchableOpacity key={card.key} style={[styles.card, card.color]}>
    //         <Image
    //           style={styles.cardImg}
    //           source={card.uri} />
    //         <Text style={styles.cardText}>{card.text}</Text>
    //       </TouchableOpacity>
    //     )
    //   })}
    //   </RootStack.Navigator>
    // </ScrollView>
    // </SafeAreaView>

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
    paddingTop: 20,
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

const resources = [
  {
    key: 'Kin',
    uri: require('./res/drawble/kinematics.png'),
    text: 'Кинематика',
    color: styles.red,
  },
  {
    key: 'Din',
    uri: require('./res/drawble/dinamic.png'),
    text: 'Динамика',
    color: styles.blue,
  },
  {
    key: 'Stat',
    uri: require('./res/drawble/static.png'),
    text: 'Статика и гидростатика',
    color: styles.green,
  },
  {
    key: 'Zse',
    uri: require('./res/drawble/zse.png'),
    text: 'Законы сохранения в механике',
    color: styles.yellow,
  },
  {
    key: 'Kol',
    uri: require('./res/drawble/koleb.png'),
    text: 'Механические колебания',
    color: styles.red,
  },
  {
    key: 'Mol',
    uri: require('./res/drawble/mol.png'),
    text: 'Молекулярно-Кинетическая теория',
    color: styles.blue,
  },
  {
    key: 'Term',
    uri: require('./res/drawble/term.png'),
    text: 'Термодинамика',
    color: styles.green,
  },
  {
    key: 'Elec',
    uri: require('./res/drawble/elec.png'),
    text: 'Электростатика',
    color: styles.yellow,
  },
]
