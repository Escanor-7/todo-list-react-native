import { TouchableOpacity } from "react-native";
import { styles } from './styles';
import { plusIcon } from '../../assets/svg/index';
import { SvgXml } from 'react-native-svg';
import { useState } from "react";

type CreateButtonProps = {
  onClick: () => void;
}

export function CreateButton({ onClick }: CreateButtonProps) {
  const [focusStyle, setFocusStyle] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={[styles.button,
        focusStyle ? { backgroundColor: '#4EA8DE' } : { backgroundColor: '#1E6F9F' }
        ]}
        onPress={onClick}
        onFocus={() => { setFocusStyle(!focusStyle) }}
        // onPress={() => { setFocusStyle(!focusStyle); onClick }}
        onBlur={() => setFocusStyle(false)}
      >
        <SvgXml xml={plusIcon} height={16} />
      </TouchableOpacity>
    </>
  )
}