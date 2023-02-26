import React from 'react'
// Interfaces
import { ITask } from '../../interfaces/task'

//CSS
import styles from './index.module.css'

type Props = {
  taskList: ITask[],
  handleDelete(id: number):void,
  handleEditTask(task: ITask): void,
}

const TaskList = ({taskList, handleDelete, handleEditTask}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map( (task) => {
          return(
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <i 
                  className='bi bi-pencil' 
                  onClick={() => {handleEditTask(task)}}
                ></i>
                <i 
                  className='bi bi-trash' 
                  onClick={() => {handleDelete(task.id);}}
                ></i>
              </div>
            </div>
          )
        })
      ) : (
        <p>Não há tarefas...</p>
      ) }
    </>
  )
}

export default TaskList