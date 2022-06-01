import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false, // Quando estiver true, quando o usuário clicar automaticamente o display precisa ser limpo
  operation: '',
  values: [0, 0],
  current: 0 // valor que eu estou setando
}

const App = () => {
  const [state, setState] = useState<{
    displayValue: string
    clearDisplay: boolean
    operation: string | boolean
    values: number[]
    current: number
  }>(initialState);

  const addDigit = (digit: string) => {
    const clearDisplay = state.displayValue === '0' || state.clearDisplay;

    if(digit === '.' && !clearDisplay && state.displayValue?.includes('.')) return;
    
    const currentValue = clearDisplay ? '' : state.displayValue;
    const displayValue = currentValue + digit;
    setState({ ...state, displayValue, clearDisplay: false });

    if(digit !== '.'){
      const newValue = parseFloat(displayValue)
      const values = state.values
      values[state.current] = newValue;
    }
    console.debug(state)
  }

  const clearMemory = () => {
    setState(initialState)
  }

  const setOperation = (operation: string) => {
    if(state.current === 0){
      setState({...state, operation, current: 1, clearDisplay: true });
    }else{
      const equals = operation === '=';
      const values = state.values;

      try{
        values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`)
      }catch(e){
        values[0] = state.values[0]
      }
      
      values[1] = 0;
      setState({
        ...state,
        displayValue: String(values[0]),
        operation: equals ? false : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });

    }
    console.debug(state)
  }

  return (
    <View style={S.container}>
      <Display value={state.displayValue} />
      <View style={S.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
      </View>
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})



export default App;
