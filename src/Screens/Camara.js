import * as React from 'react';
import { useState,useEffect } from 'react';
import { View, Text, SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';
import { Camera, Constants } from 'expo-camera'



const camara = () => {
    //Constante para poder usar la camara
    const[type, setType]=useState(Camera.Constants.Type.front)
    //permisos para usar la camara
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(()=>{
      (async ()=> {
        const {status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission( status === 'granted')
      })();
    },[]);
    
    if(hasPermission===null){
      return <View />;
    }
    else if (hasPermission === false){
      <Text>Se requiere el acceso a la camara</Text>;
    } 
    //pinta la camara   
    return (
      <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>   
    
    
      /*<SafeAreaView style={styles.container}>
        < Camera style ={{flex:1}}>        
        </Camera>
        </SafeAreaView>*/
        
        );
  } 
 //Estilos
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
 
 /*const styles = StyleSheet.create({
    container: { flex: 1, 
                 justifyContent:'center',
                 paddingTop: Constants.AutoFocus,
                 backgroundColor:'black',
                 padding:8,
               },
    
  });*/

    
    

export default camara
