
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Animated,Text,View,Alert } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        alert("TIMES UP")
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


// functional component that takes state from the app.js first screen render

export default function Timer(){

    const[time,setTime] = useState(10)


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
            >
                {renderTime}
                {/* {({ remainingTime, animatedColor }) => (
                <Animated.Text style={{ color: animatedColor }}>
                    {remainingTime}
                </Animated.Text>
                )} */}
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