import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () =>{
  const navigation = useNavigation() 
  return(
  <View style={styles.container}>
    <View style={styles.borda}>
    <Text style= {styles.h1}>Hi! Nichols 👋</Text>
    <Text style = {styles.h2}>Seu aplicativo a respeito do autismo</Text>
    <Text style={styles.texto}>Sobre o Autismo</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Autismo")} style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity> 
    <Text style={styles.texto}>Graus de Autismo</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Autismo")} style={styles.button}>
      <Text style={styles.buttonText}>Clique Aqui</Text>
    </TouchableOpacity>
    <Text style={styles.textoT}>Tratamentos </Text>
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
    backgroundColor:"#24E15C",
  },
  borda:{
    width: 385,
    borderWidth: 30, // Largura da borda
    borderColor: '#916EE1', // Cor da borda
    height: 756

  },
  h1:{
  marginTop: 30,
  marginLeft: 50,
  fontSize:35,
  }, 
  h2:{
  marginTop: 5,
  marginLeft: 30,
  fontSize:15,
  }, 
  texto:{
  marginTop: 50,     
  marginLeft: 90,
  fontSize:18,
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
 }, 
})
export default Home