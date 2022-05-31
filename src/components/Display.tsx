import React from "react";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type DisplayProps = {
  value: string
}

export default function Display({ value }: DisplayProps) {
  return (
    <View style={S.display}>
      <Text style={S.displayValue} numberOfLines={1}>{value}</Text>
    </View>
  )
}

const S = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'flex-end'
  },
  displayValue: {
    fontSize: 60,
    color: '#fff'
  }
})