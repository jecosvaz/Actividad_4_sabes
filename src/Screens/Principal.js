import React from 'react'
import { StyleSheet,View, Text, Image } from 'react-native'


const Principal = () => {
    return (
        
        <View >

            <Text style={style.title}>Esta es la ventana principal</Text>
           <Image style={style.image} source={{uri:'https://c.tenor.com/Vyg73kR334sAAAAM/jurassic-park-ah.gif'}}/>
        </View>
        
    )
}
const style = StyleSheet.create({
    image: {height:200, width:300, marginTop:12,},
    container:{
        flex:1,
        alignItems:'center'},
    title:{fontSize:30,},

});


export default Principal
