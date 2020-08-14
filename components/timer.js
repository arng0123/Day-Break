
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Animated,Text,View,Alert,Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


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


//return for render
    return (
        <View>
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
                             onPress:()=>console.log('YES BUTTON') //where it should reroute to Spotify API
                         }, 
                             {text:'NO',
                             onPress: ()=> {console.log('NO BUTTON'),setRestart(true)}} //Hitting the timer but not re-rendering to restart
                        ],
                        { cancelable: false }
                    )
                }}
                // onComplete={() => [true, 1000]}
            >
                {renderTime}

            </CountdownCircleTimer> 
            
    </View>
    )
}




// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });