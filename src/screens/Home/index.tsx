import { View, Text } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/CreateButton';
import { DeleteButton } from '../../components/DeleteButton';
import { Checkbox } from '../../components/Checkbox';

export function Home() {

  return (
    <View style={styles.container} >
      <Input />
      <CreateButton />
      <DeleteButton />
      <Checkbox
        text='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
      />
    </View>
  )
}