import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../Screens/Home";
import Autismo from "../../Screens/Autismo";
import GrausAutismo from "../../Screens/GrausAutismo";

// Contexto de Navegação 
const { Navigator, Screen} = createNativeStackNavigator()

export default function() {
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home}/>
            <Screen name="Autismo" component={Autismo}/>
            <Screen name="GrauAutismo" component={GrausAutismo}/>
        </Navigator>
           
        
    )
}