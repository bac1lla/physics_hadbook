import {Button, View, SafeAreaView, Image, TouchableOpacity, StyleSheet, ScrollView, Text, TextInput} from "react-native";
import React, {useState} from "react";
import * as TextComponents from "./Text"
import Markdown from 'react-native-markdown-package';
import Textarea from 'react-native-textarea';
import {Formula} from "../Formula"

// const UselessTextInput = () => {
//   const [value, onChangeText] = React.useState('Useless Placeholder');

function header({navigation}) {
  return (
    <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image style={styles.img} source={require('./drawble/backArrow.png')} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate(Formula)}>
      <Image style={styles.img} source={require('./drawble/settings.png')} />
    </TouchableOpacity>
    </View>
  )
}

export function Kin({navigation}) {
  return (
    <View>
      {header({navigation})}
      <ScrollView>
      <View style={styles.theory}>
        <Markdown key={'kin'}>{TextComponents.Kin}</Markdown>
        {/*<Button style={styles.back} onPress={() => navigation.goBack()} title="Назад"/>*/}
      </View>
    </ScrollView>
    </View>
  );
}

export function Din({navigation}) {
  return (
    <View>
      {header({navigation})}
    <ScrollView>
      <View style={styles.theory}>
        <Markdown key={'din'}>{TextComponents.Din}</Markdown>
        <Button onPress={() => navigation.goBack()} title="Dismiss"/>
      </View>
    </ScrollView>
    </View>
  );
}

export function Stat({navigation}) {
  return (
    <ScrollView>
      <View style={styles.theory}>
        <Markdown key={'Stat'}>{TextComponents.Stat}</Markdown>
        <Button onPress={() => navigation.goBack()} title="Dismiss"/>
      </View>
    </ScrollView>
  );
}

export function Zse({navigation}) {
  return (
    <ScrollView>
      <View style={styles.theory}>
        <Markdown key={'Zse'}>{TextComponents.Zse}</Markdown>
        <Button onPress={() => navigation.goBack()} title="Dismiss"/>
      </View>
    </ScrollView>
  );
}

export function Kol({navigation}) {
  return (
    <ScrollView>
      <View style={styles.theory}>
        <Markdown key={'Kol'}>{TextComponents.Kol}</Markdown>
        <Button onPress={() => navigation.goBack()} title="Dismiss"/>
      </View>
    </ScrollView>
  );
}

export function Mol({navigation}) {
  return (
    <ScrollView>
      <View style={styles.theory}>
        <Markdown key={'Mol'}>{TextComponents.Mol}</Markdown>
        <Button onPress={() => navigation.goBack()} title="Dismiss"/>
      </View>
    </ScrollView>
  );
}

export function Term({navigation}) {
  return (
    <ScrollView>
      <View style={styles.theory}>
        <Markdown key={'Term'}>{TextComponents.Term}</Markdown>
        <Button onPress={() => navigation.goBack()} title="Dismiss"/>
      </View>
    </ScrollView>
  );
}

export function Elec({navigation}) {
  return (
    // <TextInput
    //   style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    //   onChangeText={text => onChangeText(text)}
    //   value={Elec1}
    // />
    // <Textarea
    //   containerStyle={{height: 800}}
    //   style={[styles.textarea]}
    //   onChangeText={this.state.text =}
    //   defaultValue={Elec1}
    //   maxLength={3000}
    //   placeholder={'Говно'}
    //   placeholderTextColor={'#c7c7c7'}
    //   underlineColorAndroid={'transparent'}
    // />
    <ScrollView>
      <View style={styles.theory}>
        <Markdown key={'ETerm'}>{TextComponents.Elec}</Markdown>
        <Button onPress={() => navigation.goBack()} title="Dismiss"/>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  theory: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 70
  },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingBottom: 5,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  img: {
    padding: 15,
    width: '30%',
    height: '10%',
    alignItems: 'center',
  }
})


const Elec1 = `
Законы термодинамика
Первый закон термодинамики устанавливает равенство между изменением внутренней энергии тела и суммой полученной телом теплоты и совершённой над ним работы.

Тепловой двигатель – периодически действующее устройство, служащее для превращения внутренней энергии рабочего тела (как правило, газа или пара) в механическую энергию.

Количество теплоты, выделяющееся при полном сгорании вещества (топлива), прямо пропорционально массе сгоревшего вещества (топлива). Коэффициент пропорциональности – удельная теплота сгорания топлива.

Известно три способа теплопередачи (теплообмена) – теплопроводность, конвекция и излучение. При теплопроводности теплота проникает через вещество без его перемещения (в случае отсутствия вещества теплопроводность является нулевой). При конвекции теплота перемещается неравномерно нагретым движущимся веществом (в условиях, когда возможно возникновение архимедовой силы). При излучении теплота передаётся через пространство или вещество в виде электромагнитных волн (для излучения наличие вещества не является обязательным, в отличие от первых двух способов теплопередачи).

Второй закон термодинамики гласит, что теплообмен самостоятельно протекает только в таком направлении, что температура менее нагретого тела возрастает, а более нагретого – уменьшается.

`
