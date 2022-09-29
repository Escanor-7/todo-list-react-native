import { TouchableOpacity } from "react-native";
import { styles } from './styles';
import { PlusButton } from '../../assets/svg/index';
import { SvgXml } from 'react-native-svg';
import { useState } from "react";

export function CreateButton() {
  const [focusStyle, setFocusStyle] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={[styles.button,
        focusStyle ? { backgroundColor: '#4EA8DE' } : { backgroundColor: '#1E6F9F' }
        ]}
        onPress={() => setFocusStyle(!focusStyle)}
        onBlur={() => setFocusStyle(false)}
      >
        <SvgXml xml={PlusButton} height={16} />
      </TouchableOpacity>
    </>
  )
}