import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function App(){
  return(
  <View style={styles.container}>
    <View style={styles.gradient}>
    <Text style= {styles.h1}>Hi! Nichols</Text>
    <Text style = {styles.h2}>Seu aplicativo a respeito do autismo</Text>
    <Text style={styles.texto}>Sobre o Autismo</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity> 
    <Text style={styles.texto}>Graus de Autismo</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity>
    <Text style={styles.texto}>Tratamentos </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity>
    <Text style={styles.texto}>Mais informações </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#2CDB23",
  },
  gradient:{
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, #2CDB23, #916EE1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1:{
  marginTop: 30,
  marginLeft: 90,
  fontSize:35,
  }, 
  h2:{
  marginTop: 5,
  marginLeft: 50,
  fontSize:15,
  }, 
  texto:{
  marginTop: 50,     
  marginLeft: 120,
  fontSize:18,
 }, 
 button:{
  marginTop: 20,     
  marginLeft:120,
  fontSize:15,
 }
})