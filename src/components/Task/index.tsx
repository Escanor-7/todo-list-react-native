import { View } from "react-native";
import { Checkbox } from '../../components/Checkbox';
import { DeleteButton } from '../../components/DeleteButton';
import { styles } from "./styles";

type TaskProps = {
  task: string;
  handleCompletedTask?: () => void;
  handlerTaskRemoval?: () => void;
  isChecked: boolean;
}

export function Task({ task, handleCompletedTask, handlerTaskRemoval, isChecked }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        text={task}
        onClick={handleCompletedTask}
        isChecked={isChecked}
      />
      <DeleteButton onClick={handlerTaskRemoval} />
    </View>
  )
}