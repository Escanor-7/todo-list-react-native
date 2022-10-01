import { useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/CreateButton';
import { Task } from '../../components/Task';
import { logRocket, clipboard } from '../../assets/svg';
import { SvgXml } from 'react-native-svg';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskDescription, setTaskDescription] = useState('');
  const [focusStyle, setFocusStyle] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleTaskCreation = () => {
    if (taskDescription === '') {
      return Alert.alert('Campo vazio', 'Por favor, digite o nome da tarefa.')
    } else if (tasks.includes(taskDescription)) {
      return Alert.alert('Tarefa já existe', 'Por favor, digite uma nova tarefa.')
    }
    setTasks((prevState) => [...prevState, taskDescription]);
    setTaskDescription('');
  }

  const handleCompletedTask = (item: string) => {
    const taskComplete = completedTasks.find(completedTask => completedTask === item);

    if (taskComplete) {
      setCompletedTasks(() => completedTasks.filter(task => task !== item))
    } else {
      setCompletedTasks(prevState => [...prevState, item])
    }
  }

  return (
    <View style={styles.container} >
      <View style={styles.headerContainer} >
        <SvgXml
          xml={logRocket}
          width={140}
          height={54}
        />
        <View style={styles.createTaskContainer} >
          <Input
            value={taskDescription}
            onChange={setTaskDescription}
          />
          <CreateButton
            onClick={() => handleTaskCreation()}
          />
        </View>
      </View>
      <View style={styles.content} >
        <View style={styles.taskInfoRow} >
          <View style={styles.taskInfoContainer} >
            <Text style={[styles.infoText, { color: '#4EA8DE' }]} >
              Criadas
            </Text>
            <Text style={styles.quantityText} >{tasks.length}</Text>
          </View>
          <View style={styles.taskInfoContainer} >
            <Text style={[styles.infoText, { color: '#5E60CE' }]} >
              Concluídas
            </Text>
            <Text style={styles.quantityText} >{completedTasks.length}</Text>
          </View>
        </View>
        <View style={styles.taskContainer} >
          {!tasks.length && (
            <>
              <View style={styles.horizontalBar} />
              <SvgXml
                xml={clipboard}
                style={{ marginTop: 48 }}
              />
              <Text style={[styles.statusText, { fontWeight: '700', marginTop: 16 }]} >Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.statusText} >Crie tarefas e organize seus itens a fazer</Text>
            </>
          )}
          <FlatList
            data={tasks}
            renderItem={(task) => {
              const { item } = task;
              return (
                <Task
                  task={item}
                  focusStyle={focusStyle}
                  onClick={() => handleCompletedTask(item)}
                />
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}