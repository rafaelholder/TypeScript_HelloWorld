import React, { useState } from 'react';

// CSS
import styles from './app.module.css';

// COMPONENTS
import Footer from './components/footer';
import Header from './components/header';
import Modal from './components/modal';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

// Interfaces
import { ITask } from './interfaces/task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);


  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = {id, title, difficulty};

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems);
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if(display){
      modal!.classList.remove("hide")
      
    }else{
      modal!.classList.add("hide")
      
    }

  }

  const editTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);

  }

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    );
  }

  return (
    <div className="container">
      
      <Modal 
        children={
          <TaskForm 
            btnText='Editar Tarefa' 
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate ={updateTask}
          />
        }
      />
      <Header />
      
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
            btnText='Criar Tarefa'
            taskList={taskList} 
            setTaskList={setTaskList} 
          />
        </div>

        <div>
          <h2>Suas tarefas:</h2>
          <TaskList 
            taskList={taskList}
            handleDelete={deleteTask}  
            handleEditTask={editTask}        
          />
        </div>
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;
