import * as React from 'react';
import { useState,useEffect,useRef } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Modal, Image} from 'react-native';
import { Camera, Constants } from 'expo-camera'
import { Entypo } from '@expo/vector-icons';

const camara = () => {
    //Constante para poder usar la camara
    const[type, setType]=useState(Camera.Constants.Type.front)
    //permisos para usar la camara
    const [hasPermission, setHasPermission] = useState(null);
    //constante para capturar la imagen de la camara
    const camRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [open, setOpen] = useState(null);
 
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
    //funcion asyc para poder tomar la fotografia
    async function takePiture(){
      if (camRef){
        const data = await camRef.current.takePitureAsync();
        console.log(data);
      }
    }

    //pinta la camara   
    return (
      <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
    {/* boton para cambiar de camara */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Cambiar </Text>
          </TouchableOpacity>

          {/*boton para tomar la imagen */}
          <TouchableOpacity styles={styles.btnPhoto}>
            <Entypo name="camera" size={45} color="black" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>   
                 
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
    color: 'yellow',
  },
  btnPhoto:{
    position: 'absolute',
    right: 20,
    backgroundColor:'yellow',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    bottom: 10,

  },
});
 
 
export default camara
