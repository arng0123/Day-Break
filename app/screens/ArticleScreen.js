import React,{useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import{Text, View,Image,StyleSheet} from 'react-native'
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';


export default function ArticleScreen () {
    const[articles,setArticles] = useState([])


    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b14f9a2679a84957bafc9feb995cb1ad')
            .then(res => {
                setArticles(res.data.articles)
            })
            .catch(err=>{console.log(err)})
    },[])
    // console.log("IM THE STATE",articles)
  


    //this maps through our top articles an returns hyperlinked articles
    const list = () => {
        return articles.map(
            elment => {
                console.log("IM IN THE MAP",elment.title)
                return (
                        <Text>
                        <Text 
                        key = {elment.title}
                        style={{color: 'blue'}}
                        onPress={() => WebBrowser.openBrowserAsync(`${elment.url}`)}
                        >
                            {elment.title} {'\n'}{'\n'}
                        </Text>
                        <Text>{'\n'}{elment.source.name}{'\n'}</Text>
                        <Image 
                            stlye = {styles.image}
                            source={{uri: `${elment.urlToImage}`} //WHY WONT IT RENDER THE IMAGES?!
                            }/>
                        </Text>
                )
            }
        )
    }
      


    return (
        <View> 
        <ScrollView>
            <Text>
                TODAYS HEADLINES {'\n'}{'\n'}
                {list()}
            </Text>   
         </ScrollView>    
        </View>


    )
}


const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
    }
})