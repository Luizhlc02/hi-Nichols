import React, { useEffect } from 'react';
import { View, StyleSheet,Text} from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export function ProgressBar({value}){
    const widthContainer = useSharedValue(200);

    const endReached = value >= 95;
    const animatedStyle = useAnimatedStyle (() =>{
        return{
            width: widthContainer.value
        }
    });

    useEffect(()=>{
        widthContainer.value = endReached ? 56 : 200;
    }, [value]);
    return(
    <Animated.View style={[styles.container, animatedStyle]}>    
      <Text style={styles.value}> {value.toFixed(0)}%</Text> 
            
       <View style={styles.tracker}>
       <View style={[styles.progress, {width: value + '%'}]} />
       </View>     
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