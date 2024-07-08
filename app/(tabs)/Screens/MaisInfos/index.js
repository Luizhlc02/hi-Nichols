import React, { useState, useRef} from 'react';
import { ScrollView,View, Image, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "../../Componentes/ProgreesBar";


export default function App(){
  const navigation = useNavigation();
  const [percentage, setPercentage] = useState(0);
  const scrollRef = useRef(null);
  function scrollPercentage({contentSize, contentOffset, layoutMeasurement}){
    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
    setPercentage(value);
  }
  function handleScrollMoveTop(){
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true
    });
  }
  const handlePress = () => {
    Linking.openURL('https://www.canalautismo.com.br/'); // Substitua pela URL desejada
  };
  const handlePress1 = () => {
    Linking.openURL('https://www.autismoemdia.com.br/'); // Substitua pela URL desejada
  };
  const handlePress2 = () => {
    Linking.openURL('https://neuroconecta.com.br/'); // Substitua pela URL desejada
  };
  const handlePress3 = () => {
    Linking.openURL('https://www.scielo.br/j/pcp/a/RP6tV9RTtbLNF9fnqvrMVXk/'); // Substitua pela URL desejada
  };
  const handlePress4 = () => {
    Linking.openURL('https://www.fcee.sc.gov.br/'); // Substitua pela URL desejada
  };
  const handlePress5 = () => {
    Linking.openURL('http://portal.mec.gov.br/component/tags/tag/autismo'); // Substitua pela URL desejada
  };
  const handlePress6 = () => {
    Linking.openURL('https://institutoneurosaber.com.br/ '); // Substitua pela URL desejada
  };
  const handlePress7 = () => {
    Linking.openURL('https://www.ama.org.br/site/'); // Substitua pela URL desejada
  };
  return(
  <View style={styles.container}>
    <View style={styles.borda}>
    <ScrollView
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      onScroll={(event) => scrollPercentage(event.nativeEvent)}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
      <Text style={styles.textoButton}>◀︎Voltar</Text>
    </TouchableOpacity>
    <Text style= {styles.h1}>Mais Informações </Text>
    <Text style={styles.texto}>Para mais informações a respeito do Autismo a consulta em sites é um grande aliado para se manter informado e a pá desse espectro, abaixo alguns sites famosos.</Text>
    <Text style={styles.h2}>Canal Autismo</Text>
    <Text style={styles.texto}>Um portal com notícias, artigos, entrevistas e outros conteúdos sobre o TEA.</Text>
    <TouchableOpacity onPress={handlePress}> 
    <Text style={styles.link}>Clique aqui para visitar o site</Text> 
    </TouchableOpacity>
    <Text style={styles.h2}>Autismo em Dia</Text>
    <Text style={styles.texto}>Um site com informações, dicas e orientações para pessoas com TEA, seus familiares e profissionais</Text>
    <TouchableOpacity onPress={handlePress1}> 
    <Text style={styles.link}>Clique aqui para visitar o site</Text> 
    </TouchableOpacity>
    <Text style={styles.h2}>Canal Autismo</Text>
    <Text style={styles.texto}>Neuro+Conecta: Um site que oferece informações sobre o TEA de forma acessível e descomplicada, para pais, familiares e profissionais da saúde e educação.</Text>
    <TouchableOpacity onPress={handlePress2}> 
    <Text style={styles.link}>Clique aqui para visitar o site</Text> 
    </TouchableOpacity>
    <Text style={styles.h2}>Resvista Autismo</Text>
    <Text style={styles.texto}>A primeira revista em português especializada no Transtorno do Espectro Autista. Publica artigos científicos e outros materiais sobre o TEA.</Text>
    <TouchableOpacity onPress={handlePress3}> 
    <Text style={styles.link}>Clique aqui para visitar o site</Text> 
    </TouchableOpacity>
    <Text style={styles.h1}>Governo:</Text>
    <Text style={styles.h2}>Portal do Autismo - FCEE/UFSC</Text>
    <Text style={styles.texto}>Um portal com informações sobre o TEA, mantido pela Universidade Federal de Santa Catarina.</Text>
    <TouchableOpacity onPress={handlePress4}> 
    <Text style={styles.link}>Clique aqui para visitar o site</Text> 
    </TouchableOpacity>
    <Text style={styles.h2}>Ministério da Educação</Text>
    <Text style={styles.texto}>A página do Ministério da Educação sobre Educação Especial Inclusiva, com informações sobre o atendimento educacional especializado para alunos com TEA.</Text>
    <TouchableOpacity onPress={handlePress5}> 
    <Text style={styles.link}>Clique aqui para visitar o site</Text> 
    </TouchableOpacity>
    <Text style={styles.h1}>Outras Fontes</Text>
    <Text style={styles.h2}>Instituto NeuroSaber</Text>
    <Text style={styles.texto}>Um instituto que oferece serviços de diagnóstico e intervenção para pessoas com TEA.</Text>
    <TouchableOpacity onPress={handlePress6}> 
    <Text style={styles.link}>Clique aqui para visitar o site</Text> 
    </TouchableOpacity>
    <Text style={styles.h2}>Associação Amor pelos Autistas (AMA)</Text>
    <Text style={styles.texto}>Uma organização que oferece tratamento gratuito para pessoas com TEA.</Text>
    <TouchableOpacity onPress={handlePress7}> 
    <Text style={styles.link}>Clique aqui para visitar o site</Text> 
    </TouchableOpacity>
    </ScrollView>
    <ProgressBar value = {percentage} onMoveTop={handleScrollMoveTop}/>
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
    borderWidth: 10, 
    borderColor: '#916EE1', 
    height: 756

  },
  h1:{
  marginTop: 30,
  marginLeft: 20,
  fontSize:35,
  }, 
  h2:{
  marginTop: 10,
  marginLeft: 20,
  fontSize:25,
  fontWeight:"bold",
  }, 
  texto:{
  marginTop: 10,     
  marginLeft: 20,
  fontSize:18,
  marginRight:10,
 }, 
  link:{    
    marginLeft: 20,
    fontSize:18,
    marginRight:10,
    fontWeight:"bold"
  },
  texto2:{
    marginTop:0,
    fontSize:18,
    marginLeft: 20,
    fontWeight: "bold"
  },
 button:{
  backgroundColor: "white",
  marginTop:15,
  marginRight:240,
  borderRadius:5,

 },
 textoButton:{
  fontSize:20,
  marginLeft:5,
  fontWeight: "bold"
 }, 
})

