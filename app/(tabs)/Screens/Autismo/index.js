import React, { useState, useRef} from 'react';
import { ScrollView,View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "../../Componentes/ProgreesBar";

export default function App(){
  const navigation = useNavigation();
  const [percentage, setPercentage] = useState(0);
  const scrollRef = useRef(null);
  //Descobrindo a porcentagem do texto em tela  
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
  return(
  <View style={styles.container}>
    <View style={styles.borda}>
    <ScrollView
    ref={scrollRef}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
    onScroll={(event) => scrollPercentage(event.nativeEvent)}
    >
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
      <Text style={styles.textoButton}>◀︎Voltar</Text>
    </TouchableOpacity>
    <Text style= {styles.h1}>Sobre o Autismo</Text>
    <Text style= {styles.h2}>Síntese </Text>
    <Text style={styles.texto}>O transtorno do espectro autista (TEA), conforme denominado pelo DSM-5, o Manual Diagnóstico e Estatístico de Transtornos Mentais, também conhecidos pela sua denominação antiga (DSM IV): autismo, é um transtorno neurológico caracterizado por comprometimento da interação social, comunicação verbal e não verbal e comportamento restrito e repetitivo. </Text>
    <Text style={styles.texto}>Os sinais geralmente desenvolvem-se gradualmente, mas algumas crianças autistas alcançam o marco de desenvolvimento em um ritmo normal e depois regridem. </Text>
    <Text style={styles.texto}>O autismo é normalmente hereditário, mas a causa inclui tanto fatores ambientais quanto predisposição genética. Em casos raros, o autismo é fortemente associado a agentes que causam defeitos congênitos. Controvérsias em torno de outras causas ambientais propostas; a hipótese de danos causados por vacinas são biologicamente improváveis e têm sido refutadas em estudos científicos. 	Os critérios diagnósticos exigem que os sintomas se tornem aparentes antes da idade de três anos. Os transtornos do espectro autista afetam o processamento de informações no cérebro, alterando as conexões e a organização das células nervosas.Transtornos antes classificados separadamente, como a Síndrome de Asperger e o Transtorno global do desenvolvimento sem outra especificação — comumente abreviado como PDD-NOS (sigla em inglês) ou Transtorno invasivo do desenvolvimento sem outra especificação — comumente abreviado como TID-SOE (sigla em português)hoje fazem parte de uma única classificação diagnóstica, o Transtorno do Espectro do Autismo (TEA).</Text>
    <Text style={styles.h2}>Histórico</Text>
    <Text style={styles.texto}>Foi descrito pela primeira vez em 1943, pelo médico austríaco Leo Kanner, trabalhando no Johns Hopkins Hospital, em seu artigo Autistic disturbance of affective contact, na revista Nervous Child. No mesmo ano, o também austríaco Hans Asperger descreveu, em sua tese de doutorado, a psicopatia autista da infância. Embora ambos fossem austríacos, devido à Segunda Guerra Mundial não se conheciam.A palavra "autismo" foi criada por Eugene Bleuler, em 1911, para descrever um sintoma da esquizofrenia, que definiu como sendo uma "fuga da realidade". Kanner e Asperger usaram a palavra para dar nome aos sintomas que observavam em seus pacientes.</Text>
    <Text style={styles.texto}>O trabalho de Asperger só veio a se tornar conhecido nos anos 1970, quando a médica inglesa Lorna Wing traduziu seu trabalho para o inglês. Foi a partir daí que um tipo de autismo de alto desempenho passou a ser denominado síndrome de Asperger.Nos anos 1950 e 1960, o psicólogo Bruno Bettelheim afirmou que a causa do autismo seria a indiferença da mãe, que denominou de "mãe-geladeira". Nos anos 1970 essa teoria foi rejeitada e passou-se a pesquisar as causas do autismo. Hoje, sabe-se que o autismo está ligado a causas genéticas associadas a causas ambientais. Dentre possíveis causas ambientais, a contaminação por metais pesados, como o mercúrio e o Chumbo, têm sido apontada como forte candidatos, assim como problemas na gestação. 	Outros problemas, como uso de drogas na gravidez ou infecções nesse período, também devem ser considerados.</Text>
    <Text style={styles.texto}>Apesar do grande número de pesquisas e investigações clínicas realizadas em diferentes áreas e abordagens de trabalho, não se pode dizer que o autismo é um transtorno claramente definido. Há correntes teóricas que apontam as alterações comportamentais nos primeiros anos de vida (normalmente até os 3 anos) como relevantes para definir o transtorno, mas hoje se tem fortes indicações de que o autismo seja um transtorno orgânico. Apesar disso, intervenções intensivas e precoces são capazes de melhorar os sintomas. Em 18 de dezembro de 2007, a Organização das Nações Unidas decretou todo 2 de abril como o Dia Mundial do Autismo.Em 2008 houve a primeira comemoração da data pela ONU.Em novembro de 2010, a ciência falou pela primeira vez em cura do autismo, com a publicação na revista científica Cell da descoberta de um grupo de cientistas nos EUA, com o pesquisador brasileiro Alysson Muotri, na Universidade da Califórnia, que conseguiu "curar" um neurônio "autista" em laboratório. O estudo, que se baseou na Síndrome de Rett (um tipo de autismo com maior comprometimento e com comprovada causa genética).[115] </Text>
    <Text style={styles.texto}>Já em território brasileiro Em 2012,  sancionou a “Lei Berenice Piana” ,Lei 12.764 de 2012 , que criou a Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro do Autismo, regulamentada pelo Decreto 8.368 de 2014. Em maio de 2013, saiu a versão atualizada do Manual de Diagnóstico e Estatística dos Transtornos Mentais, o DSM-5 — substituindo o DSM-IV, criado em 1994 e revisado em 2000 — que cunhou o termo técnico Transtorno do Espectro Autista (TEA), integrando todos os transtornos do espectro, sob o código 299.0.
      Em junho de 2018, a OMS lançou a CID-11, a nova versão da Classificação Estatística Internacional de Doenças e Problemas Relacionados à Saúde, acompanhando o DSM-5 e também fundindo as classificações diagnósticas do espectro autista em um único código, o 6A02, para TEA.</Text>
    <Text style={styles.h2}>Causas</Text>
    <Text style={styles.texto}>O autismo tem uma forte base genética, embora a genética do autismo é complexa e não está claro se o TEA é explicado por mutações mais raras, com grandes efeitos, ou por interações multigênicas raras de variantes genéticas comuns. A complexidade surge devido a interações entre múltiplos genes, o meio ambiente e fatores epigenéticos que não alteram o DNA, mas que são hereditários e influenciam a expressão do gene.Estudos de gêmeos sugerem que a hereditariedade é de 0,7 para o autismo e tão alto quanto 0,9 para TEA, e irmãos de pessoas com autismo são cerca de 25 vezes mais suscetíveis de ser autista do que a população em geral.
Estudos do sequenciamento do material genético de indivíduos autistas identificaram mais de 102 genes relacionados a esse transtorno, sendo 49 deles nas formas mais graves de atraso no neurodesenvolvimento. No entanto, por não se tratar de uma herança de transmissão mendeliana simples, há uma grande dificuldade em predizer o número de regiões genéticas que contribuem para a manifestação da síndrome.Uma das mutações foi identificada em um paciente por uma deleção heterozigótica no gene NRXN2, ocasionando uma terminação prematura que gera uma incapacidade da proteína mutante de se ligar aos seus parceiros usuais. Isso gerou uma perda de função, desencadeando o TEA.</Text>
    <Text style={styles.texto}>Os sintomas do autismo resultam de mudanças relacionadas à maturação em vários sistemas do cérebro. Como autismo ocorre ainda não é bem compreendido. O seu mecanismo pode ser dividido em duas áreas: a fisiopatologia das estruturas cerebrais e processos associados ao autismo, e as ligações entre as estruturas neuropsicológicas e comportamentos cerebrais.Os comportamentos parecem ter múltiplas patofisiologias. Diferente de muitas outras doenças cerebrais,  o autismo não tem um mecanismo claro de unificação, quer a nível molecular, celular ou sistemas; não se sabe se o autismo é composto de algumas desordens causadas por mutações convergentes em algumas vias moleculares comuns, ou se é (como a deficiência intelectual) um grande conjunto de doenças com diversos mecanismos.</Text>
    <Text style={styles.h2}>Autismo no Brasil</Text>
    <Text style={styles.texto}>Antes de existirem iniciativas voltadas ao diagnóstico, o autismo surgiu em pautas de jornais traduzidas por agências de notícias. Na década de 1970, surgiram alguns dos primeiros congressos e instituições voltadas ao autismo. Na década de 1980, o transtorno começa a ganhar maior visibilidade pública com o surgimento de associações fundadas por mães e pais, como a AMA e, mais tarde, a Associação Brasileira de Autismo (Abra). Nas décadas de 1990 e 2000, a popularização do autismo se desenvolve em diferentes estados do país, ao passo que as primeiras legislações foram desenvolvidas. No final dos anos 2000, começou-se a discutir a criação de uma lei nacional sobre autismo. Nos anos 2010, foi sancionada a Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista, ao passo que pessoas autistas passaram a participar com maior ênfase do ativismo institucional, além da criação de mídias sobre o autismo. </Text>
    <Text style={styles.texto}>O cenário do autismo no Brasil também é caracterizado por tensões e conflitos entre ativistas e organizações em temas como intervenções em saúde, educação especial e representação do autismo. Em declarações públicas, também é comum o uso da expressão "autista" como insulto por pessoas públicas. Até a década de 2020, não existiam prevalências de autismo na população brasileira. Por isso, estimativas com base nos números do Centros de Controle e Prevenção de Doenças (CDC), dos Estados Unidos, eram comuns em manifestos, textos oficiais e jornalísticos.</Text>
    <Text style={styles.texto}>Números da Abra em 1997 estimavam 600 mil pessoas com o chamado "autismo clássico" no Brasil. Em fevereiro de 2011, foi publicado o primeiro estudo de epidemiologia de autismo da América Latina, com dados de 2010, liderado pelo psiquiatra da infância Marcos Tomanik Mercadante. Os números se basearam num projeto-piloto com amostragem de 20 mil pessoas num bairro da cidade paulista de Atibaia, e aferiu a prevalência de um caso de autismo para cada 368 crianças de 7 a 12 anos. Nos anos seguintes, diferentes estimativas sobre o autismo no Brasil foram apresentadas com base nos números do Centros de Controle e Prevenção de Doenças (CDC), dos Estados Unidos. Em 2014, estimava-se 2 milhões de brasileiros autistas, enquanto em 2023 o número subiu para quase 6 milhões. Em 2019, para cobrir a lacuna do número de autistas no Brasil, foi sancionada a Lei 13.861/19, que visava prover dados oficiais sobre o país. Por isso, o Censo demográfico do Brasil de 2022 foi o primeiro a conter informações sobre o autismo.</Text>
    <Text style={styles.h2}>Dia Mundial do Autismo</Text>
    <Text style={styles.texto}>O Dia Mundial do Autismo, celebrado anualmente em 2 de abril, foi criado pela Organização das Nações Unidas em 18 de dezembro de 2007  para a conscientização acerca dessa questão. No evento de 2010, a ONU declarou que, segundo especialistas, acredita-se que este transtorno de desenvolvimento atinja cerca de 70 milhões de pessoas em todo o mundo, afetando a maneira como esses indivíduos se comunicam e interagem. Em 2011, o Brasil teve o Cristo Redentor, no Rio de Janeiro, iluminado de azul nos dias 1 e 2 de abril, além da Ponte Estaiada em São Paulo, os prédios do Senado Federal e do Ministério da Saúde em Brasília, o Teatro Amazonas em Manaus, a torre da Usina do Gasômetro, em Porto Alegre, entre muitos outros. Em Portugal, monumentos e prédios, como a Torre dos Clérigos e a estátua do Cristo Rei em frente a Lisboa também foram iluminados de azul para a data. Desde 2011, o Cristo Redentor, no Rio de Janeiro, vem se iluminando de azul todo ano para a data.</Text>
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
    borderWidth: 10, // Largura da borda
    borderColor: '#916EE1', // Cor da borda
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