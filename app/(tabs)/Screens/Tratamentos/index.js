import React from 'react';
import { ScrollView,View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function App(){
  const navigation = useNavigation();
  return(
  <View style={styles.container}>
    <View style={styles.borda}>
    <ScrollView>
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
    <Text style={styles.h2}>Autismo severo e os seus sinais</Text>
    <Text style={styles.h2}>Autismo severo e os seus sinais</Text>
    <Text style={styles.h2}>Autismo severo e os seus sinais</Text>
    <Text style={styles.h2}>Autismo severo e os seus sinais</Text>
    <Text style={styles.h2}>Autismo severo e os seus sinais</Text>
    <Text style={styles.h2}>Autismo severo e os seus sinais</Text>
    <Text style={styles.h2}>Autismo severo e os seus sinais</Text>
    <Text style={styles.texto}>De modo geral, os sinais do autismo severo podem ser mais perceptíveis do que os de outros graus do espectro, como o autismo leve. Ainda assim, é importante que desde a primeira infância os pais estejam atentos aos seguintes sinais: pouco ou nenhum contato visual, apresentar resistência ao toque , a criança apresenta predileção por objetos que não causam interesse em outras pessoas , brincar de maneira diferente das outras crianças (exemplo: colocar o carrinho de ponta cabeça e girar as rodinhas), não desenvolver a fala ou desenvolver pouco até os 2 anos.</Text>
    <Text style={styles.texto}>Independente do nível de necessidade de suporte que uma pessoa no espectro do autismo tem, é importante que você entenda que todos podem aprender e se desenvolver. Assim, uma das primeiras coisas que a família deve fazer é acreditar no potencial de desenvolvimento daquela criança. Além disso, é importante começar o quanto antes a fazer as intervenções necessárias e buscar aquelas que são baseadas em práticas com evidências científicas. Você  pode também tomar algumas iniciativas que serão essenciais no desenvolvimento da criança: incentive a independência:, fazendo a criança praticar atividades no dia a dia, faça parte de uma comunidade: conheça pessoas que vivem uma realidade parecida e troque experiências e desabafos, invista no treinamento de pais: esse serviço é essencial e vai te ajudar a lidar com comportamentos no dia a dia. </Text>
    <Text style={styles.texto}>Reforçando mais uma vez que o diagnóstico deve ser feito ainda na infancia , nos primeiros anos de vida, quanto mais cedo o diagnóstico mais cedo será feito o tratamento, assim o grau de autismo irá amenizar. Por isso, o mais indicado é que, ao perceber ou ser alertada dos sinais de TEA, a família busque ajuda do pediatra, neuropediatra ou (neurologista infantil) ou psiquiatra infantil. Vale reforçar que a intervenção pode ser iniciada imediatamente, sem precisar esperar pelo diagnóstico. Isso porque, quanto antes começarem, maiores são os ganhos devido à neuroplasticidade.</Text>
    </ScrollView>
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

