import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const App = () => {
  return (
    <View style={S.container}>
      <Display value="0" />
      <View style={S.buttons}>
        <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
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
