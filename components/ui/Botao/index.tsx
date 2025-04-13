import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

type Props = {
    children: React.ReactNode;
    onPress: () => void;
}

export default function CustomBotao({
    children,
    onPress }:Props){
        return(
            <TouchableOpacity style={[styles.botao]} onPress={onPress}>
                <Text style={[styles.titulo]}>{children}</Text>
            </TouchableOpacity>
        )
    }
