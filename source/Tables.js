import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as TableRes from "./res/TableComponents";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Таблицы" component={HomeScreen}/>
    </MainStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.table}>

        {resources.map(card => {
          return (
            <TouchableOpacity key={card.key} style={[styles.card, card.color]}
                              onPress={() => navigation.navigate(`${card.key}`)}>
              <View><Text style={styles.cardText}>{card.text}</Text></View>
            </TouchableOpacity>
          )
        })}

    </View>
  );
}

export const Tables = () => {

  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={MainStackScreen}/>
      <RootStack.Screen name="Prefix" component={TableRes.Prefix}/>
      <RootStack.Screen name="Const" component={TableRes.Const}/>
      <RootStack.Screen name="ParticleWeight" component={TableRes.ParticleWeight}/>
      <RootStack.Screen name="Density" component={TableRes.Density}/>
      <RootStack.Screen name="HeatCapacity" component={TableRes.HeatCapacity}/>
      <RootStack.Screen name="SpecHeat" component={TableRes.SpecHeat}/>
      <RootStack.Screen name="MolWeight" component={TableRes.MolWeight}/>
      <RootStack.Screen name="Astronom" component={TableRes.Astronom}/>
    </RootStack.Navigator>
  )
}


const styles = StyleSheet.create({
  table: {
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
    height: 100,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15
  },
  col1: {
    backgroundColor: '#00BFFF'
  },
  col2: {
    backgroundColor: '#00CED1'
  },
  col3: {
    backgroundColor: '#00FFFF'
  },
  col4: {
    backgroundColor: '#6495ED'
  },
  col5: {
    backgroundColor: '#1E90FF'
  },
  col6: {
    backgroundColor: '#40E0D0'
  },
  col7: {
    backgroundColor: '#4169E1'
  },
  col8: {
    backgroundColor: '#4682B4'
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
    text: 'Десятичные приставки',
    key: 'Prefix',
    color: styles.col1,
  },
  {
    text: 'Коснтанты',
    key: 'Const',
    color: styles.col2,
  },
  {
    text: 'Масса частиц',
    key: 'ParticleWeight',
    color: styles.col3,
  },
  {
    text: 'Плотность',
    key: 'Density',
    color: styles.col4,
  },
  {
    text: 'Удельная теплоемкость',
    key: 'HeatCapacity',
    color: styles.col5,
  },
  {
    text: 'Удельная теплота',
    key: 'SpecHeat',
    color: styles.col6,
  },
  {
    text: 'Молярная масса',
    key: 'MolWeight',
    color: styles.col7,
  },
  {
    text: 'Астрономические величины',
    key: 'Astronom',
    color: styles.col8,
  }
]
