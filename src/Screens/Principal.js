import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const Principal = (props) => {
    const navigation = useNavigation();
    return (

        <View >
            <ImageBackground
                style={style.image}
                source={{ uri: 'https://downloadwap.com/thumbs3/screensavers/d/new/movies/matrix-78898.gif' }}
            >
                <Text style={style.title}>Esta es la ventana principal</Text>
                <View style={style.MarginButton}>
                    <Button
                        onPress={() => props.navigation.navigate('Camara')}
                        title="Camara"
                        color="#F5B041"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={style.MarginButton}>
                    <Button
                        onPress={() => props.navigation.navigate('DirectoryStack')}
                        title="Directorio"
                        color="#808B96"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                {/* <View>
                    <Image
                        style={style.imageFront}
                        source={{ uri: 'https://w7.pngwing.com/pngs/511/969/png-transparent-software-engineering-computer-software-software-development-engineer-text-people-computer.png' }} />
                </View> */}
                {/* <TouchableOpacityBase>
                  <Text style ={style.btnCamara}>
                  Camara
                </Text> */}
                {/* </TouchableOpacityBase> */}
            </ImageBackground>
        </View>


    )
}
const style = StyleSheet.create({
    image: { height: 640, width: '100%' },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        backgroundColor: '#196F3D',
        color: 'white',
        fontSize: 30,
    },
    btnCamara: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        fontSize: 18,
    },
    MarginButton: {
        displayflex: 1,
        alignItems: 'center'
        , marginTop: 15,
        borderBottomEndRadius: 35,
    },
    imageFront: {
        height: 10,
        width: 10,
        flex: 1,
        alignItems: 'center',
        marginTop:10

    },

});


export default Principal
