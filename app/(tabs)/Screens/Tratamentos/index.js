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
    <Text style= {styles.h1}>Tratamentos</Text>
    <Text style={styles.texto}>O tratamento do autismo, apesar de não curar esta síndrome, é capaz de melhorar a comunicação, a concentração e diminuir os movimentos repetitivos, melhorando assim a qualidade de vida do próprio autista e também da sua família.Para um tratamento eficaz, é indicado que seja feito com uma equipe composta por médico, fisioterapeuta, psicoterapeuta, terapeuta ocupacional e fonoaudiólogo, que indicam terapias específicas para cada paciente, e muitas vezes devem ser feitas por toda vida. A seguir está listado o tratamento para amenizar os 3 graus do TEA.</Text>
    <Text style= {styles.h2}>Autismo Grau 1</Text>
    <Text style={styles.texto}>Com a estimulação adequada, o tratamento de fonoaudiologia, nutrição, terapia ocupacional, psicologia e educação correta e especializada, a pessoa com "autismo leve" consegue atingir elevados níveis de desenvolvimento. Importante afirmar que o tratamento é a longo prazo e envolve 3 medidas sendo essas:</Text>
    <Text style={styles.texto2}>Psicoterapia;</Text>
    <Text style={styles.texto2}>Sessões de fonoaudiologia;</Text>
    <Text style={styles.texto2}>Acompanhamento pedagógico.</Text>
    <Text style={styles.texto}>Essas medidas irão ajudar a criança a se desenvolver e a interagir melhor com os outros. A maioria dos autistas necessita de auxílio para a realização de algumas tarefas, mas, com o tempo, é capaz de adquirir independência para realizar a maioria das atividades de vida diária. Porém, essa autonomia vai depender do seu grau de comprometimento, principalmente da linguagem, apoio familiar e intervenção precoce. Reforçando novamente que o tratamento deve ser feito ainda na infância , de preferencia nos primeiros anos de vida da criança para não piorar a síndrome.</Text>
    <Text style={styles.texto}>A psicoterapia tem como objetivo principalmente melhorar:</Text>
    <Text style={styles.texto2}>Comportamentos sociais, como contato visual;</Text>
    <Text style={styles.texto2}>Comportamentos acadêmicos, como escrita e leitura;</Text>
    <Text style={styles.texto2}>Atividades cotidianas;</Text>
    <Text style={styles.texto2}>Comportamentos problemáticos, como agressões verbais, estereotipias, autolesões etc.</Text>
    <Text style={styles.h2}>Terapia ocupacional</Text>
    <Text style={styles.texto}>A terapia ocupacional é voltada para a prevenção e tratamento de pessoas portadoras de alterações cognitivas, perceptivas, psicomotoras e afetivas, inclusive o autismo. O terapeuta ocupacional avalia as melhores alternativas e aplica diferentes atividades de trabalho de acordo com a evolução do tratamento dos distúrbios do paciente. Dessa forma, a intervenção utiliza tecnologias e atividades variadas com foco na autonomia do indivíduo que precisa melhorar a adaptação à vida social e desenvolver a autoconfiança para mitigar os impactos do TEA em sua vida.</Text>
    <Text style={styles.texto}>Por mais que não existam medicamentos específicos para o tratamento do autismo, em alguns casos, o TEA pode vir acompanhado de outras condições, como depressão e ansiedade.</Text>
    <Text style={styles.texto}>Nesses casos, há a possibilidade de serem utilizados antidepressivos, ansiolíticos e estabilizadores de humor. Lembrando que os remédios precisam ser prescritos e o seu uso acompanhado por um médico psiquiatra.</Text>
    <Text style={styles.h2}>Autismo Grau 2</Text>
    <Text style={styles.texto}>	Basicamente o tratamento do Autismo Grau 2 é o mesmo do Leve, mas vale frisar que a diferença das pessoas diagnosticadas com esse espectro devem ser melhor acompanhadas de perto pela família , pois elas sentem mais dificuldades de fazerem atividades básicas do dia-dia, tais como escovar os dentes, se vestir, etc. Com outras palavras , algumas intervenções podem ser feitas por profissionais tais , como :
    Terapia Ocupacional (T.O.)</Text>
    <Text style={styles.texto}>Que promove, mantém e desenvolve habilidades necessárias e funcionais para que a pessoa com TEA possa se adaptar de forma funcional no dia a dia. Além do desenvolvimento sensorial proporcionado pela T.O. para integração sensorial, outras habilidades também são desenvolvidas, como: emocional, física e cognitivas;</Text>
    <Text style={styles.h2}>Fonoaudiologia</Text>
    <Text style={styles.texto}>É uma especialidade que trabalha diretamente na fala, com o intuito de ampliar as habilidades de fala e linguagem, é uma das intervenções que usam a Comunicação Aumentativa e Alternativa (CAA), que possibilita o aprendizado de pessoas que não possuem a linguagem oral funcional. E não só isso, a fonoaudiologia também pode auxiliar pessoas com TEA em casos de seletividade alimentar, dificuldades para engolir e até outros transtornos alimentares;</Text>
    <Text style={styles.h2}>Terapia ABA </Text>
    <Text style={styles.texto}>A Análise do Comportamento Aplicada (do inglês Applied Behavior Analysis) pode ser utilizada em intervenções para pessoas com autismo com o objetivo de entender e ajudar com um determinado comportamento. A intervenção faz uso de práticas científicas baseadas em evidências, que é o termo usado para determinar um conjunto de procedimentos para os quais os pesquisadores forneceram um nível aceitável de pesquisa que mostra que a prática produz resultados positivos para pessoas com TEA.</Text>
    <Text style={styles.texto}>Apesar do autismo moderado apresentar uma diferente necessidade de suporte, as intervenções não precisam ser feitas separadas diretamente ao nível de autismo, pois tudo depende da dificuldade da pessoa</Text>
    <Text style={styles.texto}>Por exemplo: se a criança com autismo severo apresenta uma dificuldade maior na hora da alimentação, ou por apresentar seletividade alimentar, ou no momento da deglutição (engolir), comparada a dificuldade motora, portanto, o tratamento de fonoaudiologia deverá ser reforçado em comparação a outras áreas. Claro que isso varia de caso em caso e, principalmente, de acordo com a evolução da criança.</Text>
    <Text style={styles.texto}>Quando falamos em necessidades de suporte nas atividades da vida diária, falamos principalmente em necessidades e atividades básicas, que naturalmente fazem parte da rotina. Em casos de dificuldades, é preciso procurar um Terapeuta Ocupacional para desenvolver as habilidades:</Text>
    <Text style={styles.texto2}>De ir ao banheiro (desfralde);</Text>
    <Text style={styles.texto2}>Vestir-se sozinho;</Text>
    <Text style={styles.texto2}>Escovar os dentes;</Text>
    <Text style={styles.texto2}>Alimentar-se sozinho;</Text>
    <Text style={styles.texto2}>De sentar sozinho, equilibrar-se.</Text>
    <Text style={styles.texto}>Na Terapia Ocupacional, e também na Fonoaudiologia, é trabalhada a percepção dos cinco sentidos, justamente para apresentar diferentes texturas, tamanhos, gostos, cheiros, sabores, etc para a pessoa com TEA, dessa forma, cria-se uma percepção do mundo ao redor que ela ainda não possui, ou que tem dificuldade em perceber por conta de disforias sensoriais e estímulos (demais ou de menos).</Text>
    <Text style={styles.h2}>Autismo Grau 3</Text>
    <Text style={styles.texto}>Antes de enumerar o tratamento vale destacar  que o terceiro grau do autismo é o mais severo comprometendo completamente a comunicação do indivíduo diagnosticado, é importante adotar estratégias de comunicação eficazes, pois  são cruciais para expressarem suas necessidades, desejos e emoções, as dificuldades de comunicação podem levar à frustração e ao isolamento, tornando difícil para os indivíduos expressarem eficazmente as suas necessidades e emoções. As interações sociais podem ser opressoras e confusas, levando a dificuldades na construção e manutenção de relacionamentos. Sendo assim, comportamentos desafiadores, como automutilação ou agressão, podem surgir como resultado de dificuldades de comunicação e de processamento sensorial.</Text>
    <Text style={styles.texto}>Os sistemas de Comunicação Aumentativa e Alternativa (AAC), como os sistemas de comunicação por troca de imagens (PECS) ou dispositivos geradores de fala, podem fornecer formas alternativas de comunicação. Também, histórias sociais, cronogramas visuais e suportes visuais também podem ajudar a pessoa a compreender e navegar em suas rotinas diárias. Vale destacar também a tecnologia assistiva, que desempenha um papel significativo. Desde dispositivos geradores de fala até aplicativos e softwares projetados para indivíduos com autismo grave, a tecnologia assistiva pode melhorar a comunicação, apoiar a aprendizagem e promover a independência. Por isso, estas ferramentas tecnológicas oferecem a oportunidade de se expressarem, interagirem com o mundo e acederem eficazmente aos recursos educacionais. Não obstante também, as técnicas de integração sensorial são essenciais, muitas vezes enfrentam dificuldades de processamento sensorial. Portanto, a terapia ocupacional pode ajudar a desenvolver habilidades de regulação sensorial e abordar sensibilidades sensoriais. Dietas sensoriais, salas sensoriais e o uso de ferramentas sensoriais podem fornecer o apoio necessário para gerenciar desafios sensoriais e melhorar o bem-estar geral. </Text>
    <Text style={styles.texto}>O apoio da família e da comunidade é vital para capacitar pessoas com autismo de nível 3. As famílias muitas vezes desempenham um papel central no fornecimento de apoio contínuo e na defesa de seus entes queridos. Organizações comunitárias, grupos de apoio e programas de inclusão também contribuem para a criação de um ambiente inclusivo e de apoio para indivíduos com autismo de nível 3. Assim, ao promover a compreensão, a aceitação e a colaboração, as famílias e as comunidades podem fazer uma diferença significativa na vida dessas pessoas.</Text>
    <Text style={styles.texto}>Assim como o Autismo Leve e Moderado, o Severo possuem os mesmos tratamentos para amenizar o transtorno , mesmo que sem os resultados esperados do grau 1 e 2 devido a gravidade do cenário de comportamento, comunicação e interação do diagnosticado. A seguir novamente algum dos tratamentos</Text>
    <Text style={styles.h2}>Fonoaudiologia</Text>
    <Text style={styles.texto}>O acompanhamento com o fonoaudiólogo é importante para melhorar a comunicação verbal da pessoa com o espectro autista com outras pessoas. Durante as sessões são realizados diversos exercícios que podem ajudar a criança a aumentar o seu vocabulário e melhorar a entoação da voz, podendo ser realizados jogos e brincadeiras para atrair a atenção da criança.</Text>
    <Text style={styles.h2}>Musicoterapia</Text>
    <Text style={styles.texto}>A música ajuda o individuo a entender as emoções, aumentando sua interação com o mundo à sua volta. O objetivo não é aprender a cantar ou tocar nenhum instrumento, sendo somente importante saber ouvir e se expressar através dos sons que os instrumentos podem produzir e também através de movimentos de dança, por exemplo, num ambiente leve e descontraído.</Text>
    <Text style={styles.h2}>Psicoterapia</Text>
    <Text style={styles.texto}>A psicoterapia deve ser guiada pelo psicólogo e pode ser realizada sozinho ou em grupo, com encontros semanais. Especialmente por meio da terapia comportamental, é possível desenvolver as habilidades de comunicação e interação, além de estratégias para lidar com as dificuldades emocionais.</Text>
    <Text style={styles.h2}>Terapia ocupacional</Text>
    <Text style={styles.texto}>A terapia ocupacional é também indicada no tratamento do transtorno do espectro autista, sendo muitas vezes indicada em associação com a psicoterapia. O objetivo da terapia ocupacional é melhorar a qualidade de vida da pessoa e estimular a autonomia, o que é feito através de tecnologias e atividades que necessitam da ação da pessoa, assim como atividades que promovam o processo de adaptação da pessoa à sociedade e a autoconfiança.</Text>
    <Text style={styles.h2}>Psicomotricidade</Text>
    <Text style={styles.texto}>Pode ser orientada por um fisioterapeuta especialista e, durante as sessões, podem ser realizados diversos jogos e brincadeiras com o objetivo de desenvolver a coordenação motora e controle dos movimentos.</Text>
    <Text style={styles.h2}>Terapia ABA</Text>
    <Text style={styles.texto}>A terapia ABA é um método que ajuda nas habilidades sociais, comunicativas e emocionais e de aprendizado, melhorando a qualidade de vida e a autonomia de pessoas com transtorno do espectro autista, que possuem dificuldades de socialização, aprendizagem ou de atividades do dia a dia, como alimentação e autocuidado</Text>
    <Text style={styles.h2}>Equoterapia</Text>
    <Text style={styles.texto}>A terapia com cavalos é muito útil para melhorar a reação de endireitamento do corpo, quando a criança está em cima do animal, a coordenação motora, o controle da respiração e desenvolver a autoconfiança do autista. As sessões geralmente duram entre 30 minutos e 1 hora</Text>
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
  texto2:{
    marginTop:0,
    fontSize:18,
    marginLeft: 20,
    fontWeight:"bold"
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

