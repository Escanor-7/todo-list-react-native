import { TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { deleteIcon } from '../../assets/svg/index';
import { SvgXml } from 'react-native-svg';
import { useState } from "react";

export function DeleteButton() {
  const [focusStyle, setFocusStyle] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.button,
      focusStyle && { backgroundColor: '#333333' }
      ]}
      onPress={() => setFocusStyle(!focusStyle)}
      onBlur={() => setFocusStyle(false)}
    >
      <SvgXml xml={deleteIcon}
        stroke={focusStyle ? '#E25858' : '#808080'}
        fill={focusStyle ? '#E25858' : '#808080'}
        color={focusStyle ? '#E25858' : '#808080'}
      />
    </TouchableOpacity>
  )
}