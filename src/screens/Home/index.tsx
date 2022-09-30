import { View, Text } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/CreateButton';
import { Task } from '../../components/Task';
import { logRocket, clipboard } from '../../assets/svg';
import { SvgXml } from 'react-native-svg';

export function Home() {

  return (
    <View style={styles.container} >
      <View style={styles.headerContainer} >
        <SvgXml
          xml={logRocket}
          width={140}
          height={54}
        />
        <View style={styles.createTaskContainer} >
          <Input />
          <CreateButton />
        </View>
      </View>
      <View style={styles.content} >
        <View style={styles.taskInfoRow} >
          <View style={styles.taskInfoContainer} >
            <Text style={[styles.infoText, { color: '#4EA8DE' }]} >
              Criadas
            </Text>
            <Text style={styles.quantityText} >0</Text>
          </View>
          <View style={styles.taskInfoContainer} >
            <Text style={[styles.infoText, { color: '#5E60CE' }]} >
              Concluídas
            </Text>
            <Text style={styles.quantityText} >0</Text>
          </View>
        </View>
        <View style={styles.horizontalBar} />
        <View style={styles.taskContainer} >
          <SvgXml
            xml={clipboard}
            style={{ marginTop: 48 }}
          />
          <Text style={[styles.statusText, { fontWeight: '700', marginTop: 16 }]} >Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.statusText} >Crie tarefas e organize seus itens a fazer</Text>
          {/* <Task /> */}
        </View>
      </View>
    </View>
  )
}