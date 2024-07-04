import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
const Home = () =>{
  const navigation = useNavigation() 
  //Criando a constante de Notificação
  const handleCallNotification = async () => {
    const {status} = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
    if (newStatus !== 'granted'){
      Alert.alert("Ative as notificações");
      return;
    }
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title:"Hello",
        body: "Abra o aplicativo e junte-se à comunidade! Vamos juntos promover a inclusão e o conhecimento sobre o autismo."
      },
      trigger: {
        seconds: 5,
      }
    })
  }
  return(
  <View style={styles.container}>
    <View style={styles.borda}>
    <Text style= {styles.h1}>Hi! Nichols 🤓</Text>
    <Text style = {styles.h2}>Seu aplicativo sobre autismo</Text>
    <Text style={styles.texto}>Sobre o Autismo</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Autismo")} style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity> 
    <Text style={styles.texto}>Graus de Autismo</Text>
    <TouchableOpacity onPress={() => navigation.navigate("GrausAutismo")} style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity>
    <Text style={styles.textoT}>Tratamentos </Text>
    <TouchableOpacity onPress={() => navigation.navigate("Tratamentos")} style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity>
    <Text style={styles.texto}>Mais informações </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity>
    <Button title="🔔" color="#FFFFFF" marginTop="" style={styles.buttonNotification} onPress={handleCallNotification} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#20C450",
  },
  borda:{
    width: 385,
    borderWidth: 25, 
    borderColor: '#916EE1', 
    height: 756,
    marginEnd: 4

  },
  h1:{
  marginTop: 30,
  marginLeft: 50,
  fontSize:35,
  }, 
  h2:{
  marginTop: 5,
  marginLeft: 60,
  fontSize:15,
  }, 
  buttonNotification:{
  padding:10,
  fontSize:10,
  marginTop: 10,
  },
  texto:{
  marginTop: 50,     
  marginLeft: 90,
  fontSize:18,
  fontWeight:"bold",
 }, 
 button:{
  backgroundColor:"#FFFFFF",
  marginTop: 20,     
  marginLeft:100,
  fontSize:15,
  width:"40%",
  height:35,
  alignItems:"center",
  justifyContent:"center",
  borderRadius:10,
 },
 textoT:{
  marginTop: 50,     
  marginLeft:100,
  fontSize:18,
  fontWeight:"bold",
 }, 
})
export default Home