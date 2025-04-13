import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";

type Props = {
  hint?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function CustomInput({
  hint,
  onChangeText,
  value,
  ...props
}: Props) {
  return (
    <View>
      <TextInput
        style={[styles.input]}
        value={value}
        placeholder={hint}
        onChangeText={onChangeText}
        {...props}
      ></TextInput>
    </View>
  );
}
