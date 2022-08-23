import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from "uuid"

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { TaskList } from './TaskList'




export interface ITask {
  content: string;
  id: string;
  isDone: boolean;
}

const tasksList: ITask[] = [
  {
    content: "Estudar React Native",
    id: uuidv4(),
    isDone: false,
  },
  {
    content: "Ir a Academia",
    id: uuidv4(),
    isDone: true,
  },
];

export function NewTask() {
  const [newTaskText, setNewTaskText] = useState<string>('');

  const [tasks, setTasks] = useState<ITask[]>(tasksList);


  function sortByIsDone(newTasksArray: ITask[]) {
    const newTasksArraySorted = newTasksArray.sort((a, b) => {
      if (a.isDone === false) return -1;
      if (a.isDone === true) return 1;
      return 0;
    });
    return newTasksArraySorted;
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      content: newTaskText,
      id: uuidv4(),
      isDone: false,
    };
    const newTasksArray = [...tasks, newTask];

    setTasks(sortByIsDone(newTasksArray));
    setNewTaskText("");
  }


  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);

  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteTask(taskId: string) {
    const newTasksArray = tasks.filter((task: ITask) => task.id !== taskId);

    setTasks(newTasksArray);
  }

  function selectTask(taskId: string) {
    const newTasksArray = tasks.map((task: ITask) => {
      if (task.id === taskId) task.isDone = !task.isDone;
      return task;
    });
    setTasks(sortByIsDone(newTasksArray));
  }

 


  return (
    <div className={styles.taskForm}>
      <header className={styles.taskHeader}>
        <form onSubmit={handleCreateNewTask}>
          <input
            placeholder="Adicionar nova tatrefa"
            type="text"
            id="newTask"
            value={newTaskText}
            required
            onInvalid={handleNewTaskInvalid}
            onChange={(e) => handleNewTaskChange(e)}
            className={styles.taskInputNewTask}
          />
          <button type="submit"  className={styles.taskButtonNewTask}>
            Criar <PlusCircle size={20}/>
          </button>
        </form>
      </header>
      <TaskList
        onDeleteTask={deleteTask}
        onSelect={selectTask}
        tasks={tasks}
      ></TaskList>
    </div>

  )
}