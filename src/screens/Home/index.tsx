import { View, Text } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/CreateButton';

export function Home() {

  return (
    <View style={styles.container} >
      <Input />
      <CreateButton />
    </View>
  )
}