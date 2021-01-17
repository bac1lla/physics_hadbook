import {Button, View, SafeAreaView, Image, TouchableOpacity, StyleSheet, ScrollView, Text, TextInput} from "react-native";
import React, {useState} from "react";
import * as TextComponents from "./Text"
import Markdown from 'react-native-markdown-package';
import {Formula} from "../Formula"

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
//
// export function Modify({navigation}) {
//   return (
//     <View>
//       {header({navigation})}
//       <ScrollView>
//         <TextInput
//           editable
//           maxLength={100000}
//           numberOfLines={4}
//           onChangeText={text => setTextKin(text)}
//           value={textKin}
//         />
//       </ScrollView>
//     </View>
//   );
// }

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


// const Elec1 = `
// Законы термодинамика
// Первый закон термодинамики устанавливает равенство между изменением внутренней энергии тела и суммой полученной телом теплоты и совершённой над ним работы.
//
// Тепловой двигатель – периодически действующее устройство, служащее для превращения внутренней энергии рабочего тела (как правило, газа или пара) в механическую энергию.
//
// Количество теплоты, выделяющееся при полном сгорании вещества (топлива), прямо пропорционально массе сгоревшего вещества (топлива). Коэффициент пропорциональности – удельная теплота сгорания топлива.
//
// Известно три способа теплопередачи (теплообмена) – теплопроводность, конвекция и излучение. При теплопроводности теплота проникает через вещество без его перемещения (в случае отсутствия вещества теплопроводность является нулевой). При конвекции теплота перемещается неравномерно нагретым движущимся веществом (в условиях, когда возможно возникновение архимедовой силы). При излучении теплота передаётся через пространство или вещество в виде электромагнитных волн (для излучения наличие вещества не является обязательным, в отличие от первых двух способов теплопередачи).
//
// Второй закон термодинамики гласит, что теплообмен самостоятельно протекает только в таком направлении, что температура менее нагретого тела возрастает, а более нагретого – уменьшается.`

let Kinn = `#Кинематика

![kinematika](https://uchitel.pro/wp-content/uploads/2017/09/2018-02-23_21-25-22-1024x489.jpg)

**Механическое движение** – изменение положения тела относительно других тел с течением времени. Способы описания: словесный, табличный, графический, формулами.

**Mатериальная точка** – тело, собственными размерами которого в данных условиях можно пренебречь.

![kinematika](https://uchitel.pro/wp-content/uploads/2017/09/2018-02-23_21-25-53-1024x351.jpg)

**Траектория** – линия, которую описывает материальная точка при своём движении в пространстве. По виду траектории все движения делятся на прямолинейные и криволинейные.

**Система отсчёта** – часы и система координат, связанные с условно выбираемым телом отсчёта (наблюдателем).

![kinematika](https://uchitel.pro/wp-content/uploads/2017/09/2018-02-23_21-26-21-1024x356.jpg)

**Относительность** движения – различие скорости, направления и траектории движения в различных системах отсчёта.

**Перемещение** – вектор, проведённый из начального положения материальной точки в её конечное положение.

![kinematika](https://uchitel.pro/wp-content/uploads/2017/09/2018-02-23_21-26-39-1024x318.jpg)

#Типы движений

##1. Равномерное движение

###1.1. Равномерное прямолинейное движение

**Равномерное движение** – движение тела, при котором за равные интервалы времени оно преодолевает равные части пути.

**Скорость равномерного движения** равна отношению пройденного пути к интервалу времени, за который этот путь пройден.

**Скорость равномерного прямолинейного движения** равна отношению перемещения к интервалу времени его совершения.

**Мгновенная скорость** равна отношению перемещения к бесконечно малому интервалу времени, за который оно произошло.

###1.2 Равномерное движение по окружности (равномерное вращение)

**Равномерное движение по окружности** — это движение, при котором материальная точка за равные промежутки времени проходит равные по длине дуги окружности.

**Равномерное движение тела по окружности** — это частный и наиболее простой случай криволинейного движения. Хотя при таком движении модуль скорости остается постоянным, это движение с ускорением, которое является следствием изменения направления вектора скорости. 

##2. Движение с постоянным ускорением

**Равноускоренное движение** – движение, при котором мгновенная скорость за любые равные интервалы времени меняется одинаково.

**Мгновенное ускорение равно** отношению изменения мгновенной скорости тела к бесконечно малому интервалу времени, за который это изменение произошло.

**Ускорение равноускоренного движения** равно отношению изменения мгновенной скорости тела к интервалу времени, за который это изменение произошло.

**Центростремительное ускорение** – ускорение, всегда направленное к центру окружности при равномерном движении по ней материальной точки. Модуль центростремительного ускорения равен отношению квадрата модуля скорости равномерного движения по окружности к её радиусу.
`
