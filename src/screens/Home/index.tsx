import { View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/CreateButton';
import { Task } from '../../components/Task';
import { logRocket } from '../../assets/svg';
import { SvgXml } from 'react-native-svg';


export function Home() {

  return (
    <View style={styles.container} >
      <View style={styles.headerContainer} >
        <SvgXml
          xml={logRocket}
        />
        <View style={styles.createTaskContainer} >
          <Input />
          <CreateButton />
        </View>
      </View>
      <View style={styles.content} >
        <Task />
      </View>
    </View>
  )
}