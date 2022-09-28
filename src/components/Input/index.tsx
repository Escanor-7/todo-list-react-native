import { useState } from 'react';
import { TextInput } from "react-native";
import { styles } from "./styles";

export function Input() {
  const [focusStyle, setFocusStyle] = useState(false);

  return (
    <TextInput
      style={[styles.input, { borderColor: focusStyle ? '#5E60CE' : 'transparent' }]}
      placeholder='Adicione uma nova tarefa'
      placeholderTextColor='#808080'
      onFocus={() => setFocusStyle(true)}
      onBlur={() => setFocusStyle(false)}
    />
  )
}