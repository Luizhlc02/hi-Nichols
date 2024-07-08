import React, { useState, useRef} from 'react';
import { ScrollView,View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
    <Text style= {styles.h1}>Graus do Autismo</Text>
    <Text style={styles.texto}>Dentro da classificação do autismo na 5ª edição do Manual Estatístico e Diagnóstico de Transtornos Mentais (DSM-5), da Associação Americana de Psiquiatria, o TEA é dividido em níveis que vão de 1 a 3. Nesta parte é mostrado suas características bem como suas diferenças.</Text>
    <Text style= {styles.h2}>Autismo Grau 1 ou Autismo Leve </Text>
    <Text style={styles.texto}>Apesar do autismo de grau 1 não ser uma denominação formal para o autismo leve, boa parte das pessoas e profissionais de saúde usam o termo para descrever indivíduos que possuem alterações mais leves de autismo. Sendo assim, no espectro autista leve, a pessoa consegue fazer as atividades diárias com mais facilidade e muitas vezes de forma independente, o que acaba por dificultar o diagnóstico de autismo.</Text>
    <Text style={styles.texto}>Os principais sintomas de autismo leve (autismo grau 1) podem abranger características em 3 áreas diferentes, sendo elas:</Text>
    <Text style={styles.texto2}>Comunicação;</Text>
    <Text style={styles.texto2}>Socialização;</Text>
    <Text style={styles.texto2}>Comportamental.</Text>
    <Text style={styles.texto}>Os sintomas de autismo leve na área da linguagem social se demonstram pela dificuldade que o indivíduo possui em se comunicar com outras pessoas. Essa característica do autismo leve pode estar presente na formação de frases sem conexão, uso errado de palavras e de sentido, além de problemas em se expressar. A respeito dos sintomas que valem destaque em relação a socialização é a dificuldade em fazer amizades, iniciar ou prolongar conversas, manter contato visual (olho no olho) com outras pessoas. Na parte comportamental  as pessoas com autismo leve, muitas vezes possuem alterações comportamentais padrão, como movimentos repetitivos e fixação por objetos , características estas  podendo estar presentes em qualquer diagnostico de TEA, além de outros sinais que valem destacar como, por exemplo: problemas no relacionamento interpessoal, risadas em momentos inapropriados , não olhar diretamente nos olhos, sensação de ser frio emocionalmente, demonstrar pouca dor, preferência por brincar sempre com os mesmos objetos ou brinquedos, dificuldade em focar em tarefas simples e terminá-las; Gostar de brincar mais sozinho do que com outras crianças, não demonstrar, aparentemente, medo de situações de risco, repetir palavras ou frases em momentos fora de contexto ou inadequados, parecer que está ignorando quando é chamado pelo nome, crises de ansiedade, pânico ou raiva, dificuldade em demonstrar o que sente.</Text>
    <Text style={styles.h2}>Atenção ao Diagnóstico</Text>
    <Text style={styles.texto}>O diagnóstico deve ser feito de preferência na infância acompanhando o comportamento e observando o jeito bem como os padrões  das crianças , pois mesmo com o autismo leve as pessoas diagnosticadas exercem boa parte das funções que um indivíduo sem o TEA da mesma faixa etária exerce, acabando por dificultar a percepção dessas características.
    Porém, é importante lembrar que, apesar disso, é nos detalhes dessas funções e no desenvolvimento das habilidades que os sintomas de autismo leve se encontram. Portanto, para identificar o autismo leve em crianças até os 3 anos de idade, é necessário estar atento às principais características, principalmente nas áreas de interação social, linguagem social e comportamento que citamos acima. Por isso, muitas vezes o diagnóstico de autismo leve ocorre de forma tardia, o que atrapalha no desenvolvimento da criança e na melhora dos sintomas. Para que isso não aconteça, é necessário procurar ajuda e profissional especializada.</Text>
    <Text style={styles.h2}>Autismo Grau 2 ou Autismo Moderado</Text>
    <Text style={styles.texto}>Diferente de um autista nível 1, a pessoa no nível 2 precisa de um pouco mais de suporte para realizar as chamadas atividades da vida diária (AVDs), como comer, trocar de roupas ou tomar banho.Vale ressaltar, no entanto, que essa necessidade de suporte é diferente de pessoa para pessoa. Independente do nível de autismo, é importante compreender as singularidades de cada um para auxiliar nas atividades necessárias.Os sinais de autismo moderado não são muito diferentes dos sinais nos graus leve ou severo. No entanto, eles podem ser menos perceptíveis do que os casos de TEA nível 3 e mais aparentes do que os casos de autismo nível 1. Assim como os outros, podem surgir ainda na primeira infância. Veja alguns desses sinais: pouco ou nenhum contato visual , apresentar resistência ao toque, a criança apresenta predileção por objetos que não causam interesse em outras pessoas ,brincar de maneira diferente das outras crianças (exemplo: colocar o carrinho de ponta cabeça e girar as rodinhas) , não desenvolver a fala ou desenvolver pouco até os 2 anos.</Text>
    <Text style={styles.texto}>O que difere o autismo moderado do autismo leve ou do autismo severo são os critérios para o diagnóstico. De acordo com o DSM-5, uma pessoa com autismo nível 2 apresenta as seguintes características no que diz a respeito da comunicação são : déficits graves nas habilidades de comunicação social verbal e não verbal, prejuízos sociais aparentes mesmo na presença de apoio, limitação em dar início a interações sociais , resposta reduzida ou anormal a aberturas sociais que partem de outros. Em relação ao comportamento a pessoa apresenta comportamentos restritos e repetitivos , inflexibilidade do comportamento, dificuldade em lidar com a mudança, outros padrões comportamentais restritos e repetitivos aparecem com frequência suficiente para serem óbvios ao observador casual e interferem no funcionamento em uma variedade de contextos, sofrimento e/ou dificuldade em mudar de foco ou ações.</Text>
    <Text style={styles.texto}>Mesmo sem o diagnóstico fechado, a família pode procurar por intervenção precoce que vai ajudar no desenvolvimento da criança com autismo nível 2. Quanto antes as intervenções começarem, melhores as chances de aprendizagem que poderão ser apresentadas, devido à neuroplasticidade. Além disso, é essencial que a família seja acolhida e receba orientação adequada para conseguir lidar com comportamentos desafiadores no dia a dia e se sentir mais segura quanto ao futuro da criança.</Text>
    <Text style={styles.h2}>Autismo Grau 3 ou Autismo Severo</Text>
    <Text style={styles.texto}>Autismo Grau 3 é distúrbio do neurodesenvolvimento que afeta os indivíduos de maneira significativa. Sendo assim, é caracterizado por prejuízos substanciais na comunicação, interação social e comportamento. Pessoas com esse grau  podem ter capacidade verbal limitada ou podem não falar. Frequentemente, eles têm dificuldade em compreender e responder aos sinais sociais e podem se envolver em comportamentos repetitivos ou desafiadores. Além disso indivíduos com autismo nível 3   podem ser mais dependentes de seus cuidadores para realizar as chamadas atividades da vida diária (AVDs). Ou seja, mesmo as tarefas mais simples, como se vestir, tomar banho ou comer demanda que os pais ou quem estiver com eles precisem ajudar em suas execuções. Por isso, elas têm graves déficits na comunicação e interação social e também nos padrões de comportamentos restritos e repetitivos. Algumas das características comuns em pessoas com autismo severo que prejudicam no comportamento e comunicação são: déficits na comunicação social causando prejuízos notáveis ,déficits graves nas habilidades de comunicação social verbal ,déficits graves nas habilidades de comunicação social não verbal ,dificuldade para iniciar interações sociais ,exemplos claros de respostas atípicas ou sem sucesso a aberturas sociais de outros, comportamentos restritos e repetitivos, inflexibilidade de comportamentos causa interferência significativa no funcionamento em um ou mais contextos,
extrema dificuldade em lidar com a mudança , comportamentos restritos e repetitivos interferem acentuadamente no funcionamento em todas as grandes esferas, grande sofrimento ou dificuldade para mudar o foco ou as ações.</Text>
    <Text style={styles.h2}>Autismo severo e os seus sinais</Text>
    <Text style={styles.texto}>De modo geral, os sinais do autismo severo podem ser mais perceptíveis do que os de outros graus do espectro, como o autismo leve. Ainda assim, é importante que desde a primeira infância os pais estejam atentos aos seguintes sinais: pouco ou nenhum contato visual, apresentar resistência ao toque , a criança apresenta predileção por objetos que não causam interesse em outras pessoas , brincar de maneira diferente das outras crianças (exemplo: colocar o carrinho de ponta cabeça e girar as rodinhas), não desenvolver a fala ou desenvolver pouco até os 2 anos.</Text>
    <Text style={styles.texto}>Independente do nível de necessidade de suporte que uma pessoa no espectro do autismo tem, é importante que você entenda que todos podem aprender e se desenvolver. Assim, uma das primeiras coisas que a família deve fazer é acreditar no potencial de desenvolvimento daquela criança. Além disso, é importante começar o quanto antes a fazer as intervenções necessárias e buscar aquelas que são baseadas em práticas com evidências científicas. Você  pode também tomar algumas iniciativas que serão essenciais no desenvolvimento da criança: incentive a independência:, fazendo a criança praticar atividades no dia a dia, faça parte de uma comunidade: conheça pessoas que vivem uma realidade parecida e troque experiências e desabafos, invista no treinamento de pais: esse serviço é essencial e vai te ajudar a lidar com comportamentos no dia a dia. </Text>
    <Text style={styles.texto}>Reforçando mais uma vez que o diagnóstico deve ser feito ainda na infancia , nos primeiros anos de vida, quanto mais cedo o diagnóstico mais cedo será feito o tratamento, assim o grau de autismo irá amenizar. Por isso, o mais indicado é que, ao perceber ou ser alertada dos sinais de TEA, a família busque ajuda do pediatra, neuropediatra ou (neurologista infantil) ou psiquiatra infantil. Vale reforçar que a intervenção pode ser iniciada imediatamente, sem precisar esperar pelo diagnóstico. Isso porque, quanto antes começarem, maiores são os ganhos devido à neuroplasticidade.</Text>
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

