import {Button, Text, View} from "react-native";
import React from "react";


export function Kin ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Кинематика</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Din ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Динамика</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Stat ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Статика</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Zse ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>ЗСЭ</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Kol ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Колебания</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Mol ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Молекулярка</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Term ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Термодинамика</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Elec ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Электричество</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
