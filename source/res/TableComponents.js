import {Button, Text, View} from "react-native";
import React from "react";


export function Prefix ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Десятичные приставки</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Const ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Константы</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function ParticleWeight ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Масса частиц</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Density ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Плотость</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function HeatCapacity ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Удельная теплоемкость</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function MolWeight ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Молярная масса</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function Astronom ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Астрономические величины</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export function SpecHeat ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Удельная теплота</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
