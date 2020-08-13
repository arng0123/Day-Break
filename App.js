import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Animated } from 'react-native';
import Timer from "./components/timer"

export default function App() {
  console.log('HI CONSOLES HERE IN THE TEMRINAL')



  return (
    <View style={styles.container}>
      <Text>HI WORLD</Text>
      <Button title="Hi" onPress = {() => alert("HI")} />
      <Timer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
