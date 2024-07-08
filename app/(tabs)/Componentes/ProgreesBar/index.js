import React, { useEffect } from 'react';
import { View, StyleSheet,Text, TouchableOpacity} from "react-native";
import Animated, { BounceIn, FadeIn, useAnimatedStyle, useSharedValue,withSpring } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

export function ProgressBar({value, onMoveTop}){
    const widthContainer = useSharedValue(200);
    const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);  

    const endReached = value >= 95;
    const animatedStyle = useAnimatedStyle (() =>{
        return{
            width: widthContainer.value
        }
    });
    //Caso a gente chegue no valor esperado pelo EndReached(no caso 95) ele ira mudar o tamanho da nossa ProgressBar
    //withSpring esta criando a animação na transição de tamanho para ficar algo mais bonito
    useEffect(()=>{
        widthContainer.value = withSpring(endReached ? 56 : 200, {mass:0.3});
    }, [value]);
    return(
    <Animated.View style={[styles.container, animatedStyle]}>    
     {
        //Criando uma condição, caso o EndReached for true ele irar mudar a mensagem da nossa ProgressBar para um icone
        endReached ?
        <TouchableOpacityAnimated  entering={BounceIn}  onPress={onMoveTop}>
            <Feather name = "arrow-up" size={24} color="#C4C4CC" />
        </TouchableOpacityAnimated>
        :
     <>
      <Text style={styles.value}> {value.toFixed(0)}%</Text> 
            
       <View style={styles.tracker}>
       <View style={[styles.progress, {width: value + '%'}]} />
       </View>     
    </>
    }
    </Animated.View>
    )  
}
const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: '#29292E',
        position:'absolute',
        bottom: 32,
        alignSelf:'center',
        borderRadius: 32,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: 16,
        flexDirection: 'row'
    },
    value:{
        color: "#C4C4CC",
        marginRight: 7
    },
    tracker:{
        flex: 1,
        height: 3,
        borderRadius: 3,
        backgroundColor: '#505059'
    },
    progress: {
        height: 3 ,
        backgroundColor: '#8257E5'

    }
})