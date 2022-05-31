import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native';

type ButtonProps = {
  onClick: (label: string) => void
  label: string
  double?: boolean, 
  triple?: boolean, 
  operation?: boolean
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

export default function Button({ onClick, label, double, triple, operation }: ButtonProps) {
  const styleButton = [S.button] as any;

  if(double) styleButton.push(S.buttonDouble)
  if(triple) styleButton.push(S.buttonTriple)
  if(operation) styleButton.push(S.operationButton)

  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={styleButton}>{label}</Text>
    </TouchableHighlight>
  )
}
