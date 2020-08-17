import React from "react"
import { StyleSheet, Text, View, Button, ImageBackground,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//render buttons for each choice
//Today's Headlines => Articles
//Trending YT videos => YouTube Screen

const image = {uri:"https://cdn-0.preppywallpapers.com/wp-content/uploads/2018/08/Pastel-iPhone-Wallpaper-by-PreppyWallpapers.png"}

export default function ContentSelector() {

    const navigation = useNavigation()

    return (
        <ImageBackground
        source = {image}
        style = {styles.background}
        >
        
        <View style={styles.container}>
            <Text style = {styles.text}>How do you want to spend your break? {"\n"}</Text>

            <Button
            title = "Today's Headlines"
            onPress = {
                () => navigation.navigate('articles')
            }
            />

            <Button
            title = "Trending YouTube Video"
            onPress = {
                () => navigation.navigate('youtube')
            }
            />


            <Button
            title = "Foods!"
            // onPress = {
            //     () => navigation.navigate('articles')
            // }
            />

        </View>
       </ImageBackground> 
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top:250
      },
    background: {
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    text:{
        fontSize:20,
        fontFamily:'Verdana',
        textAlign: "center",
        top: 20
      }, 
  });
  