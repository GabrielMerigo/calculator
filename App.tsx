import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const App = () => {
  const [displayValue, setDiplayValue] = useState('0');

  const addDigit = (num: string) => {
    setDiplayValue(num);
  }

  const clearMemory = () => {
    setDiplayValue('');
  }

  const setOperation = (operation: string) => {}

  return (
    <View style={S.container}>
      <Display value={displayValue} />
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
