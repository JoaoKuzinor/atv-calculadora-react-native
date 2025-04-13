import React from "react";
import {Text} from "react-native";
import styles from "./styles";


type Props = {
    children: string;
    type?: 'titulo' | 'subtitulo'
}

export default function CustomTexto({
    children,
    type='subtitulo'}:Props){
        return(
            <Text style={[styles.titulo, styles[type]]}>{children}</Text>
        )
    }
