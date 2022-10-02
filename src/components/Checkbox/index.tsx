import BouncyCheckbox from 'react-native-bouncy-checkbox';

type CheckboxProps = {
  text: string;
  onClick?: () => void;
  isChecked: boolean;
}

export function Checkbox({ text, onClick, isChecked }: CheckboxProps) {

  return (
    <BouncyCheckbox
      text={text}
      textContainerStyle={{
        flex: 1,
        marginLeft: 8,
      }}
      style={{ flex: 1 }}
      size={24}
      fillColor={isChecked ? 'transparent' : '#4EA8DE'}
      iconStyle={isChecked ? { backgroundColor: '#5E60CE' } : { backgroundColor: 'transparent' }}
      textStyle={{
        fontSize: 14,
        color: '#F2F2F2',
      }}
      isChecked={isChecked}
      onPress={onClick}
    />
  )
}