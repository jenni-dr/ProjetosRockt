import { Check, Trash } from "phosphor-react";

import styles from "./Task.module.css";

export interface ITaskItemProps {
  content: string;
  taskId: string;
  isDone: boolean;
  onDeleteTask: (taskId: string) => void;
  onSelect: (taskId: string) => void;
}

export default function Task({
  content,
  taskId,
  isDone,
  onDeleteTask,
  onSelect,
}: ITaskItemProps) {
  function handleDeleteTask() {
    onDeleteTask(taskId);
  }

  function handleSelectTask() {
    onSelect(taskId);
  }

  return (
    <div className={styles.taskItem}>
      <button
        className={
          isDone ? styles.taskItemToggleSelected : styles.taskItemToggle
        }
        onClick={handleSelectTask}
      >
        {isDone ? <Check size={20}></Check> : null}
      </button>
      <p className={isDone ? styles.taskItemTextSelected : styles.taskItemText}>
        {content}
      </p>
      <button
        className={styles.taskItemDeleteButton}
        onClick={handleDeleteTask}
      >
        <Trash size={24}></Trash>
      </button>
    </div>
  );
}