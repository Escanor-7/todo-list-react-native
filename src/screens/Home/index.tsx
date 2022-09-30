import { View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/CreateButton';
import { Task } from '../../components/Task';

export function Home() {

  return (
    <View style={styles.container} >
      <Input />
      <CreateButton />
      <Task />
    </View>
  )
}