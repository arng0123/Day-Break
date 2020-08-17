import React,{useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import{Text, View,Image,StyleSheet} from 'react-native'
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';
import {WebView} from "react-native-webview"


export default function ArticleScreen () {
    const[videos,setVideos] = useState([])


    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=player&chart=mostPopular&key=[INSERT YOUR API KEY HERE]')
            .then(res => {
                // setArticles(res.data.articles)
                // console.log(res.data)
                // setVideos(res.data.items[0].player.embedHtml)
            })
            .catch(err=>{console.log(err)})
    },[])
  


    //this maps through our top articles an returns hyperlinked articles
    // const list = () => {
    //     return articles.map(
    //         elment => {
    //             return (
    //                     <Text>
    //                         <Text style = {styles.title}>{'\n'}{elment.source.name}{'\n'}</Text>
    //                         <Text 
    //                         key = {elment.title}
    //                         style={styles.link}
    //                         onPress={() => WebBrowser.openBrowserAsync(`${elment.url}`)}
    //                         >
    //                             {elment.title} {'\n'}{'\n'}
    //                         </Text>
    //                     </Text>
    //             )
    //         }
    //     )
    // }
      

//CANT GET THE VIDEO PLAYER TO RENDER :(
    return (
        <View style={styles.background}> 

         <WebView 
            source = {{uri: "https://www.youtube.com/embed/NkE0AMGzpJY"}}
            // style={{ marginTop: 20 }}
         />
         <WebView
        style={{ marginTop: 20, width: 320, height: 230 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/embed/-ZZPOXn6_9w" }}
      />
        </View>


    )
}


const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
    }, 
    title:{
        fontFamily:'Verdana',
        fontSize:13,
        fontWeight: "bold",
        color: "black"
    },
    link:{
        color: 'blue',
        fontSize:13,
        fontFamily:'Verdana',
    },
    headline:{
        fontSize:30,
        justifyContent:"center", 
        textAlign:"center",
        top:30,
        fontFamily:'Verdana',
        fontWeight: "bold",
    },
    background: {
        backgroundColor:"#ffeedf"
    }
})