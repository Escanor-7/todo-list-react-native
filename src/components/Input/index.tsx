import { useState } from 'react';
import { TextInput } from "react-native";
import { styles } from "./styles";

type InputProps = {
  value: string;
  onChange: (text: string) => void;
}

export function Input({ value, onChange }: InputProps) {
  const [focusStyle, setFocusStyle] = useState(false);

  return (
    <TextInput
      style={[styles.input, { borderColor: focusStyle ? '#5E60CE' : 'transparent' }]}
      placeholder='Adicione uma nova tarefa'
      placeholderTextColor='#808080'
      onFocus={() => setFocusStyle(true)}
      onBlur={() => setFocusStyle(false)}
      value={value}
      onChangeText={onChange}
    />
  )
}