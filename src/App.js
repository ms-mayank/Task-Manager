// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState, useEffect } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTask = async () =>{
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    
    getTask()
  }, [])
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: { 'Content-type':'application/json'},
      body: JSON.stringify(task)
    })
    const data = await res.json()
    
    setTasks([...tasks, data])

  };
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method: 'DELETE',})
    // console.log("delete",id)
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = async (id) => {
    // console.log("toggle",id)
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{ method: 'PUT',
    headers: {'Content-type':'application/json'},
    body: JSON.stringify(updTask)
  })
  const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header title="Task Manager" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
          "No Task to show"
        )}
    </div>
  );
}

export default App;
