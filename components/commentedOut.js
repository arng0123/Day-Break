//Timer

// //Need to make this a button with 2 options
// const renderTime = ({ remainingTime }) => {
//     if (remainingTime === 0) {
//       return (
//     //    Alert.alert(
//     //        "Time's Up",
//     //        "Want to take a break?", 
//     //        [
//     //            {text:"YES", 
//     //             onPress:()=>console.log('YES BUTTON') //where it should reroute to Spotify API
//     //         }, 
//     //             {text:'NO',
//     //             onPress: ()=> setTime(15)} //where it should restart the timer
//     //        ]
//     //    )onPress={setTime(15)} 
//         <Button title = "YES"  />
//       )
//     }
  
//     return (
//       <Text >
//         <Text >Remaining {"\n"}</Text>
//         <Text >{remainingTime} {"\n"}</Text>
//         <Text >seconds {"\n"}</Text>
//       </Text>
//     );
//   };


// functional component that takes state from the app.js first screen render

// const renderTime = ({ remainingTime }) => {
//     if (remainingTime === 0) {
//       return (
//        Alert.alert(
//            "Time's Up",
//            "Want to take a break?", 
//            [
//                {text:"YES", 
//                 onPress:()=>console.log('YES BUTTON') //where it should reroute to Spotify API
//             }, 
//                 {text:'NO',
//                 onPress: ()=> {console.log(time), setTime(15)}} //Hitting the timer but not re-rendering to restart
//            ],
//            { cancelable: false }
//        )
//         // <Button title = "YES" onPress ={setTime(13)}  />
//       )
//     }
  
//     return (
//       <Text >
//         <Text >Remaining {"\n"}</Text>
//         <Text >{remainingTime} {"\n"}</Text>
//         <Text >seconds {"\n"}</Text>
//       </Text>
//     );

//   };