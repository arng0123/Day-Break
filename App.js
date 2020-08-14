import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Animated } from 'react-native';
import Timer from "./components/timer"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Are you ready to get to work today?</Text>
      <Button
        title="LET'S DO IT"
        onPress={() => navigation.navigate('timer')}
      />
    </View>
  );
}

function TimerScreen() {

return (
  <View>
    <Timer/>
  </View>
)

}//end TimerScreen function



const Stack = createStackNavigator();

export default function App() {
  console.log('HI CONSOLES HERE IN THE TEMRINAL')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="timer" component={TimerScreen} />
     </Stack.Navigator>
    </NavigationContainer>
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
