import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native';

type ButtonProps = {
  onClick?: () => void,
  label: string
}

const S = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231', 
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  }
})

export default function Button({ onClick, label, double, triple }: ButtonProps) {
  const styleButton = [S.button];

  if(double) styleButton.push()


  return (
    <TouchableHighlight onPress={onClick}>
      <Text style={S.button}>{label}</Text>
    </TouchableHighlight>
  )
}
