import { useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/CreateButton';
import { Task } from '../../components/Task';
import { logRocket, clipboard } from '../../assets/svg';
import { SvgXml } from 'react-native-svg';

type TaskProps = {
  id: number;
  name: string;
  checked: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskCreation = () => {
    const existingTask = tasks.find(task => task.name === taskDescription);
    const newTask = {
      id: Math.random(),
      name: taskDescription,
      checked: false
    }
    if (taskDescription === '') {
      return Alert.alert('Erro', 'Por favor, digite o nome da tarefa.')
    } else if (existingTask) {
      return Alert.alert('Tarefa já existe', 'Por favor, digite uma nova tarefa.')
    }
    setTasks((prevState) => [...prevState, newTask]);
    setTaskDescription('');
  }


  const handleCompletedTask = (id: number) => {
    const taskUpdate = tasks.map(task => {
      if (task.id === id && !task.checked) {
        return { ...task, checked: true }
      } else if (task.id === id && task.checked) {
        return { ...task, checked: false }
      }
      return task;
    });
    setTasks(taskUpdate);
  }

  const handlerTaskRemoval = (identifier: number) => {
    Alert.alert(
      'Remoção de tarefa',
      'Deseja remover a tarefa ?',
      [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          onPress: () => setTasks(() => tasks.filter(task => task.id !== identifier))
        },
      ],
    )
  }

  const handleNumberOfCompletedTasks = () => {
    return tasks.reduce((accumulator, item): number => {
      if (item.checked) {
        accumulator++;
      }
      return accumulator;
    }, 0)
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
            <Text style={styles.quantityText} >
              {handleNumberOfCompletedTasks()}
            </Text>
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
                  task={item.name}
                  handleCompletedTask={() => handleCompletedTask(item.id)}
                  handlerTaskRemoval={() => handlerTaskRemoval(item.id)}
                  isChecked={task.item.checked}
                />
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}