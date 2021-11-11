import * as React from 'react';
import { useState,useEffect,useRef } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Modal, Image} from 'react-native';
import { Camera, Constants } from 'expo-camera'
import { Ionicons } from '@expo/vector-icons';

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
    async function takePicture(){
      if (camRef){
        const data = await camRef.current.takePictureAsync();
        console.log(data);
        setPhoto(data.uri);
        setOpen(true);
      }
    }

    //pinta la camara   
    return (
      <View style={styles.container}>
      <Camera 
      style={styles.camera} 
      type={type} 
      ref={camRef}>
        <View style={styles.buttonContainer}>
   
          {/* boton de cambiar camara */}
          <TouchableOpacity style ={styles.btnCambiar}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>             
             <Ionicons name="md-camera-reverse" size={30} color="black" />
          </TouchableOpacity>

          {/* boton de tomar foto */}
          <TouchableOpacity style={styles.btnPhoto} onPress ={()=>{takePicture()}}>
          <Ionicons name="camera" size={30} color="black" />
          </TouchableOpacity>

          {/* funcion para tomar foto */}
          {
          photo &&
          <Modal
           animationType='slide'
           transparent ={false}
           visible ={open}
           >
          <View style={styles.photoContainer}>
            <TouchableOpacity onPress ={()=> setOpen(false)}>
            <Ionicons name="close-circle" size={35} color="red" />
            </TouchableOpacity>
            <Image
            style = {styles.photo}
            source= {{uri: photo}}
            />
          </View>
          </Modal>
          }
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
  btnCambiar: {    
    backgroundColor:'yellow',
    position: 'absolute',
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    bottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'yellow',
  },
  btnPhoto:{
    position: 'absolute',
    right: 5,
    backgroundColor:'yellow',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    bottom: 20,
   },
  photo:{
    width: '100%',
    height: 350,
  },
  photoContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
  },
});
 
 
export default camara
