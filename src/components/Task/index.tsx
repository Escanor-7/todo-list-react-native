import { View } from "react-native";
import { Checkbox } from '../../components/Checkbox';
import { DeleteButton } from '../../components/DeleteButton';
import { styles } from "./styles";

type TaskProps = {
  task: string;
  onClick?: () => void;
  focusStyle: boolean;
}

export function Task({ task, onClick, focusStyle }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        text={task}
        onClick={onClick}
        focusStyle={focusStyle}
      />
      <DeleteButton />
    </View>
  )
}