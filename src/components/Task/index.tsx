import { View } from "react-native";
import { Checkbox } from '../../components/Checkbox';
import { DeleteButton } from '../../components/DeleteButton';
import { styles } from "./styles";

export function Task() {
  return (
    <View style={styles.container}>
      <Checkbox
        text='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
      />
      <DeleteButton />
    </View>
  )
}