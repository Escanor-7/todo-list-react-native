import { TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { deleteIcon } from '../../assets/svg/index';
import { SvgXml } from 'react-native-svg';
import { useState } from "react";

type DeleteButtonProps = {
  onClick?: () => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  const [focusStyle, setFocusStyle] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.button,
      focusStyle && { backgroundColor: '#333333' },
      ]}
      onPress={onClick}
      onPressIn={() => setFocusStyle(!focusStyle)}
      onPressOut={() => setFocusStyle(!focusStyle)}
    >
      <SvgXml xml={deleteIcon}
        stroke={focusStyle ? '#E25858' : '#808080'}
        fill={focusStyle ? '#E25858' : '#808080'}
        color={focusStyle ? '#E25858' : '#808080'}
      />
    </TouchableOpacity>
  )
}