import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Animated, ImageBackground,Image } from 'react-native';
import TimerScreen from "./app/screens/TimerScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import {Formik} from 'formik'
import ArticleScreen from './app/screens/ArticleScreen';


const image = {uri:"https://cdn-0.preppywallpapers.com/wp-content/uploads/2018/08/Pastel-iPhone-Wallpaper-by-PreppyWallpapers.png"}

function HomeScreen({ navigation }) {

  return (
    <ImageBackground
    source ={image}
    style ={styles.background}
    >
      <View style={styles.container}>
      <Image style ={styles.logo} source={require("./app/assets/Logo_Spotabreak.png")}/>
        <Text style = {styles.text}>How long will it be until your next break?</Text>
      
        <Formik
            initialValues={{ minutes: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder = "ENTER MINUTES"
                  onChangeText={handleChange('minutes')}
                  value={values.mintues}
                  style = {styles.input}
                />
                <Button 
                  onPress={
                    handleSubmit, 
                    () => navigation.navigate('timer', {time: values})
                  } 
                  title="Submit" />
              </View>
            )}
         </Formik>
      </View>
    </ImageBackground>
  );
}


const Stack = createStackNavigator();

export default function App() {
  console.log('HI CONSOLES HERE IN THE TEMRINAL')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="timer" component={TimerScreen} />
        <Stack.Screen name='articles' component={ArticleScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
    // <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    color: '#16db65',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  background: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo:{
    width: 250,
    height: 250,
    position: "absolute",
    top: 10
  }, 
  text:{
    fontSize:20,
    fontFamily:'Verdana',
    justifyContent:"center", 
    textAlign: "center"
  }, 
  input:{
    width:200,
    height:50, 
    fontSize:15,
    textAlign:"center",
  }
});
