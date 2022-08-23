import { ClipboardText } from "phosphor-react";
import { ITask } from "./NewTask";
import Task from "./Task";

import styles from './TaskList.module.css'


interface TaskProps {
  tasks: ITask[];
  onDeleteTask: (task: string) => void;
  onSelect: (taskId: string) => void;
}



export function TaskList({ tasks, onDeleteTask, onSelect }: TaskProps) {

  const createdTasksCount = tasks.length;
  const doneTasksCount = tasks.filter(
  
    (task: ITask) => task.isDone === true
  ).length;
  console.log(doneTasksCount );
    

  function onDeleteTaskProps(taskId: string) {
    onDeleteTask(taskId);
  }

  function onSelectTaskProps(taskId: string) {
    onSelect(taskId);
  }



  return (
    <div className={styles.taskContent}>
      <header className={styles.taskContentHeader}>
        <div className={styles.taskCreatedTaskCounter}>
          Tarefas Criadas
          <span>{createdTasksCount}</span>
        </div>
        <div className={styles.taskDoneTaskCounter}>
          Concluídas
          <span>
            {doneTasksCount} of {createdTasksCount}
          </span>
        </div>
      </header>
      {tasks.length === 0 ? (
        <div className={styles.emptyTask}>
          <ClipboardText size={72}/>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <main className={styles.taskItensContainer}>
          {tasks.map(({ content, id, isDone }: ITask) => (
            <Task
              onDeleteTask={onDeleteTaskProps}
              onSelect={onSelectTaskProps}
              key={`${id}-${content}`}
              taskId={id}
              content={content}
              isDone={isDone}
            ></Task>
          ))}
        </main>
      )}
    </div>
  )
}