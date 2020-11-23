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
  col1: {
    backgroundColor: '#E1BEE7'
  },
  col2: {
    backgroundColor: '#D1C4E9'
  },
  col3: {
    backgroundColor: '#CE93D8'
  },
  col4: {
    backgroundColor: '#B39DDB'
  },
  col5: {
    backgroundColor: '#BA68C8'
  },
  col6: {
    backgroundColor: '#9575CD'
  },
  col7: {
    backgroundColor: '#AB47BC'
  },
  col8: {
    backgroundColor: '#7E57C2'
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
    color: styles.col1,
  },
  {
    key: 'Din',
    uri: require('./res/drawble/dinamic.png'),
    text: 'Динамика',
    color: styles.col2,
  },
  {
    key: 'Stat',
    uri: require('./res/drawble/static.png'),
    text: 'Статика и гидростатика',
    color: styles.col3,
  },
  {
    key: 'Zse',
    uri: require('./res/drawble/zse.png'),
    text: 'Законы сохранения в механике',
    color: styles.col4,
  },
  {
    key: 'Kol',
    uri: require('./res/drawble/koleb.png'),
    text: 'Механические колебания',
    color: styles.col5,
  },
  {
    key: 'Mol',
    uri: require('./res/drawble/mol.png'),
    text: 'Молекулярно-Кинетическая теория',
    color: styles.col6,
  },
  {
    key: 'Term',
    uri: require('./res/drawble/term.png'),
    text: 'Термодинамика',
    color: styles.col7,
  },
  {
    key: 'Elec',
    uri: require('./res/drawble/elec.png'),
    text: 'Электростатика',
    color: styles.col8,
  },
]
