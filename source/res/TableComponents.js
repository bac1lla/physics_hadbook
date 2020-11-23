import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import MathJax from 'react-native-mathjax-svg';


export function Prefix({navigation}) {
  return (
    <View style={styles.formula}>
      <Text style={styles.title}>Десятичные приставки</Text>
      <View>
          <Text style={styles.tableTitle}>Наименование</Text>
          <Text style={styles.tableTitle}>Значение</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>гига (Г)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^9
          </MathJax>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>мега (М)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^6
          </MathJax>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>кило (к)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^3
          </MathJax>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>гекто (г)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^2
          </MathJax>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>деци (д)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^-
          </MathJax>
          <MathJax
          fontSize={16}
          color={'black'}
          style={[styles.text2,{position: 'absolute',
            right: 33,}]}
        >^1
        </MathJax>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>санти (с)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^-
          </MathJax>
          <MathJax
            fontSize={16}
            color={'black'}
            style={[styles.text2,{position: 'absolute',
              right: 33,}]}
          >^2
          </MathJax>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>милли (м)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^-
          </MathJax>
          <MathJax
            fontSize={16}
            color={'black'}
            style={[styles.text2,{position: 'absolute',
              right: 33,}]}
          >^3
          </MathJax>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>микро (мк)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^-
          </MathJax>
          <MathJax
            fontSize={16}
            color={'black'}
            style={[styles.text2,{position: 'absolute',
              right: 33,}]}
          >^6
          </MathJax>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>нано (н)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^-
          </MathJax>
          <MathJax
            fontSize={16}
            color={'black'}
            style={[styles.text2,{position: 'absolute',
              right: 33,}]}
          >^9
          </MathJax>
        </View>
        <View style={[styles.row, styles.last]}>
          <Text style={styles.text1}>цико (ц)</Text>
          <MathJax
            fontSize={16}
            color={'black'}
            style={styles.text2}
          >
            10^-
          </MathJax>
          <MathJax
            fontSize={16}
            color={'black'}
            style={[styles.text2,{position: 'absolute',
              right: 33,}]}
          >^1
          </MathJax>
          <MathJax
            fontSize={16}
            color={'black'}
            style={[styles.text2,{position: 'absolute',
              right: 28,}]}
          >^2
          </MathJax>
        </View>
      <Button style={styles.btn} onPress={() => navigation.goBack()} title="Назад"/>

    </View>
  );
}

export function Const({navigation}) {
  return (
    <View style={styles.formula}>
      <Text style={styles.title}>Константы</Text>
      <View>
        <Text style={styles.tableTitle}>Наименование</Text>
        <Text style={styles.tableTitle}>Значение</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>&pi;</Text>
        <Text style={styles.text2}>&pi; = 3,14
          <MathJax
            color={'black'}
          >
            m/c^2
          </MathJax>
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>g</Text>

      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>G</Text>
        <Text style={styles.text2}>6,7 &middot; 10^-11</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>R</Text>
        <Text style={styles.text2}>8,31</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>k</Text>
        <Text style={styles.text2}>1,38 &middot; 10^-23</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>N<Text style={{ fontSize: 10}}>a</Text></Text>
        <Text style={styles.text2}>6 &middot; 10<Text style={{fontSize:10, textAlignVertical: 'top'}}>-23</Text></Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>c</Text>
        <Text style={styles.text2}>3 &middot; 10^8</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>e</Text>
        <Text style={styles.text2}>1,6 &middot; 10^-19</Text>
      </View>
      <View style={[styles.row, styles.last]}>
        <Text style={styles.text1}>h</Text>
        <Text style={styles.text2}>6,6 &middot; 10^-34</Text>
      </View>
      <Button style={styles.btn} onPress={() => navigation.goBack()} title="Назад"/>

    </View>
  );
}

export function ParticleWeight({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Масса частиц</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss"/>
    </View>
  );
}

export function Density({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Плотость</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss"/>
    </View>
  );
}

export function HeatCapacity({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Удельная теплоемкость</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss"/>
    </View>
  );
}

export function MolWeight({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Молярная масса</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss"/>
    </View>
  );
}

export function Astronom({navigation}) {
  return (
    <View style={styles.formula}>
      <Text style={styles.title}>Константы</Text>
      <View>
        <Text style={styles.tableTitle}>Наименование</Text>
        <Text style={styles.tableTitle}>Значение</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>Средний радиус Земли</Text>
        <Text style={styles.text2}>6370км</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>Радиус Солнца</Text>
        <Text style={styles.text2}>6,96 &middot; 10^8</Text>
      </View>
      <View style={[styles.row, styles.last]}>
        <Text style={styles.text1}>Температура Солнца</Text>
        <Text style={styles.text2}>6000К</Text>
      </View>
      <Button style={styles.btn} onPress={() => navigation.goBack()} title="Назад"/>
    </View>
  );
}

export function SpecHeat({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Удельная теплота</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss"/>
    </View>
  );
}

const styles = StyleSheet.create({
  formula: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    padding: 20,
    paddingTop: 40,
    fontSize: 18
  },
  last: {
    marginBottom: 20,
  },
  img: {
    width: '100%',
    height: 150
  },
  subtitle: {
    width: '100%',
    padding: 20,
    backgroundColor: "#eee",
    color: "#444",
  },
  text1: {
    position: 'absolute',
    left: 40,
    color: '#000'
  },
  text2: {
    paddingRight: 10,
    position: 'absolute',
    right: 40,
    color: '#000'
  },
  tableTitle: {
    color: '#eee',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#aeaeae',
    padding: 20,
  }

})
