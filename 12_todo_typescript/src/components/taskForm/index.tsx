import React, {useEffect, useState, FormEvent, ChangeEvent} from 'react'

import styles from './index.module.css';

// Interfaces
import { ITask } from '../../interfaces/task';

type Props = {
    btnText: string,
    taskList: ITask[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
    task?: ITask | null,
    handleUpdate?(id: number, title: string, difficulty: number): void

}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [difficulty, setDifficulty] = useState(0);

    useEffect(() => {
        if(task){
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)

        }
    }, [task])


    const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(handleUpdate){
            handleUpdate(id, title, difficulty)

        } else{
            const id = Math.floor(Math.random() * 1000)
            const newTask: ITask = {id, title, difficulty};

            setTaskList!([...taskList, newTask]);
        
            setTitle('');
            setDifficulty(0);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'title'){
            setTitle(event.target.value);
        }
        else if(event.target.name === 'difficulty'){
            setDifficulty(parseInt( event.target.value ))
        }
    }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Titulo:</label>
            <input 
                value={title}
                type="text"
                name='title' 
                placeholder='Titulo da tarefa' 
                onChange={handleChange}
            />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input 
                value={difficulty}
                type="text" 
                name='difficulty' 
                placeholder='Dificuldade da tarefa' 
                onChange={handleChange}
            />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm