import {Button, Text, View} from "react-native";
import React from "react";


export function Speed ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Скорость</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const Data = [

]

