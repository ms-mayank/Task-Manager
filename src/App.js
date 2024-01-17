// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import About from "./components/About";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    // console.log("delete",id)
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    // console.log("toggle",id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <BrowserRouter>
      <div className="container">
        <Header
          title="Task Manager"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTasks onAdd={addTask} />}
        <Routes>
          <Route
            path="/Task-Manager"
            element={
              <>
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Task to show"
                )}
              </>
            }
          />
          <Route path="Task-Manager"  > 
          <Route path="about" element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
