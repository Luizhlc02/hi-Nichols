import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function App(){
  return(
  <View style={styles.container}>
    <Text style= {styles.h1}>hi! Nichols</Text>
    <Text style = {styles.h2}>Seu aplicativo a respeito do autismo</Text>
    <Image
    source={require("./assets/logo.png")}
    style={styles.logo}
    />  
    <Text>Sobre o Autismo</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Abrir chat</Text>
    </TouchableOpacity> 
    <Text>Graus de Autismo</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Abrir chat</Text>
    </TouchableOpacity>
    <Text>Tratamentos </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Abrir chat</Text>
    </TouchableOpacity>
    
    <Text>Mais informações </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Abrir chat</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"green",
  } 
})