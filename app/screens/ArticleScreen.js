import React,{useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import{Text, View,Image,StyleSheet,Alert} from 'react-native'
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';


export default function ArticleScreen () {
    const[articles,setArticles] = useState([])

    const navigation = useNavigation();

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b14f9a2679a84957bafc9feb995cb1ad')
            .then(res => {
                setArticles(res.data.articles)
                setTimeout(() => {
                    Alert.alert(
                        'BACK TO WORK',
                        '',
                        [
                          {text: 'OK :(', onPress: () => navigation.navigate('Home')},
                        ],
                        {cancelable: false},
                      )

                 }, 20000) 
            })
            .catch(err=>{console.log(err)})
    },[])
  

    //this maps through our top articles an returns hyperlinked articles
    const list = () => {
        return articles.map(
            article => {
                return (
                        <Text>
                            <Text style = {styles.title}>{'\n'}{article.source.name}{'\n'}</Text>
                            <Text 
                            key = {article.title}
                            style={styles.link}
                            onPress={() => WebBrowser.openBrowserAsync(`${article.url}`)}
                            >
                                {article.title} {'\n'}{'\n'}
                            </Text>
                        </Text>
                )
            }
        )
    }
      

//return for render
    return (
        <View style={styles.background}> 
        <ScrollView>
            <Text style={styles.headline}>
                TODAYS HEADLINES {'\n'}{'\n'}
                {/* {list()} */}
            </Text>   
            {list()}
         </ScrollView>    
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