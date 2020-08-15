import React,{useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import{Text, View,Image} from 'react-native'
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';


export default function ArticleScreen () {
    const[articles,setArticles] = useState([])


    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b14f9a2679a84957bafc9feb995cb1ad')
            .then(res => {
                // console.log("IM THE RESPONSE",res.data.articles)
                //call setState here setState(res.data) // updates the article data
                setArticles(res.data.articles)
            })
            .catch(err=>{console.log(err)})
    },[])
    console.log("IM THE STATE",articles)
    // console.log("one article",articles["article"])


    //this console.logs but doesn't render
    const list = () => {
        return articles.map(
            elment => {
                console.log("IM IN THE MAP",elment.title)
                return (
                        <Text 
                        key = {elment.id}
                        style={{color: 'blue'}}
                        onPress={() => WebBrowser.openBrowserAsync(`${elment.url}`)}
                        >
                            {elment.title} {'\n'}{'\n'}
                        </Text>
                )
            }
        )
    }
      


// const image = {uri:`${articles.urlToImage}`}
    return (
        <View> 
        <ScrollView>
        <Text>
         {/* {articles.map(article=>{
             console.log("IM THE RENDER",article.author)
         })} */}
         HEADLINES {'\n'}{'\n'}
         {list()}
            {/* </Text>    

            <Text style={{color: 'blue'}}
                onPress={() => WebBrowser.openBrowserAsync(`${articles.url}`)}>
            {articles.title} */}
            </Text>   


         </ScrollView>    
        </View>


    )
}


