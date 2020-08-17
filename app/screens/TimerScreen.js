
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text,View,Alert, StyleSheet,ImageBackground} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';


const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return (
            <Text style={styles.innerClockText}>
            <Text >Time's up!</Text>
          </Text>
        )
      } 

    return (
      <Text style={styles.innerClockText}>
        <Text >Remaining {"\n"}</Text>
        <Text >{Math.round(remainingTime/60)} {"\n"}</Text>
        <Text >minutes {"\n"}</Text>
      </Text>
    );

  };

const image = {uri:"https://i.pinimg.com/originals/e9/aa/69/e9aa6982e02fef615258e1fa083cfd34.png"}



export default function Timer(props){
    const[time,setTime] = useState(Number(props["route"]["params"]["time"]["minutes"]*60))  //THIS IS IN SECONDS *60 to get minutes
    const[restart,setRestart] = useState(false)

    
    const navigation = useNavigation();

//return for render
    return (
      <ImageBackground
      source ={image}
      style ={styles.background}
      >
        <Text style={styles.clockText}>You're almost there!</Text>
        <View style={styles.container}>
            <CountdownCircleTimer
                size = {300}
                isPlaying
                duration={time}
                colors={[
                ['#004777', 0.4],
                ['#F7B801', 0.4],
                ['#A30000', 0.2],
                ]}
                onComplete = {() => {
                    Alert.alert(
                        "Time's Up",
                        "Want to take a break?", 
                        [
                            {text:"YES", 
                             onPress:()=>{
                                 console.log('YES BUTTON'),
                                 navigation.navigate('selector') //navigates to top headlines
                                } 
                         }, 
                             {text:'NO',
                             onPress: ()=> {
                              console.log('NO BUTTON'), 
                              navigation.goBack()
                              },
                             style:"cancel"} //Navigates back to home screen to reset the timer
                        ],
                        { cancelable: false }
                    )

                }}
            >
                {renderTime}

            </CountdownCircleTimer> 
            
    </View>
    </ImageBackground>  
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily:'Verdana'
    },
    clockText: {
      alignItems: "center", 
      fontSize: 40,
      top:60
    },
    innerClockText: {
      alignItems: "center", 
      fontSize: 20,
    },
    background: {
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  });