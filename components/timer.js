
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text,View,Alert, StyleSheet} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';



const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return (
            <Text >
            <Text >Time's up!</Text>
          </Text>
        )
      } 

    return (
      <Text >
        <Text >Remaining {"\n"}</Text>
        <Text >{remainingTime} {"\n"}</Text>
        <Text >seconds {"\n"}</Text>
      </Text>
    );

  };

  


export default function Timer(props){

console.log(props)
    const[time,setTime] = useState(5)
    const[restart,setRestart] = useState(false)


    const navigation = useNavigation();
//return for render
    return (
        <View style={styles.container}>
            <Text>You still got work to do...</Text>
            <CountdownCircleTimer
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
                                 console.log('YES BUTTON')
                                 WebBrowser.openBrowserAsync('https:/google.com')
                                } //where it should reroute to Spotify API
                         }, 
                             {text:'NO',
                             onPress: ()=> {console.log('NO BUTTON'), navigation.goBack()},
                             style:"cancel"} //Navigates back to home screen to reset the timer
                        ],
                        { cancelable: false }
                    )

                }}
            >
                {renderTime}

            </CountdownCircleTimer> 
            
    </View>
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });