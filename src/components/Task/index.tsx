import { View } from "react-native";
import { Checkbox } from '../../components/Checkbox';
import { DeleteButton } from '../../components/DeleteButton';
import { styles } from "./styles";

type TaskProps = {
  task: string;
}

export function Task({ task }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        text={task}
      />
      <DeleteButton />
    </View>
  )
}