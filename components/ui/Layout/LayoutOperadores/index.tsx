import React from "react";
import { View } from "react-native";
import styles from "./styles";


type Props ={
    children: React.ReactNode;
}

export default function CustomLayoutOperador({
    children }:Props){
        return(
            <View style={[styles.operators]}>
                {children}
            </View>
        )
    }
