import { useState } from "react";
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type CheckboxProps = {
  text: string;
}

export function Checkbox({ text }: CheckboxProps) {
  const [focusStyle, setFocusStyle] = useState(false);

  return (
    <BouncyCheckbox
      size={24}
      fillColor={focusStyle ? 'transparent' : '#4EA8DE'}
      iconStyle={focusStyle ? { backgroundColor: '#5E60CE' } : { backgroundColor: 'transparent' }}
      text={text}
      textStyle={{
        fontSize: 14,
        color: '#F2F2F2',
      }}
      onPress={() => setFocusStyle(!focusStyle)}
    />
  )
}