import { useState } from "react";
import TableView from "./Components/TableView";
import TextInput from "./Components/TextInput";
import Modeswitch from "./Components/Modeswitch";

function App() {
  const [toDos, setToDos] = useState([
    { id: 1, action: "Need to attend React Class", isDone: false },
    { id: 2, action: "Go For Shopping", isDone: false },
    { id: 3, action: "Call Mr. Pankaj", isDone: false },
    { id: 4, action: "Buy mobie Ticket", isDone: false },
    { id: 5, action: "Meeting With TL@5pm", isDone: true },
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCompleteTask = (task) => {
    const newToDoList = toDos.map((todo) => {
      todo.id === task.id && (todo.isDone = !todo.isDone);
      return todo;
    });
    setToDos(newToDoList);
  };

  const handleAddTask = (task) => {
    const newTask = { id: Date.now(), action: task, isDone: false };
    setToDos([...toDos, newTask]);
  };

  const handleDeleteTask = (task) => {
    const newTasks = toDos.filter((todo) => todo.id !== task.id);
    setToDos(newTasks);
  };

  const handleStartEditing = (task) => {
    const newTasks = toDos.map((todo) => {
      todo.id === task.id && (todo.isEditing = true);
      return todo;
    });
    setToDos(newTasks);
  };

  const handleEditChange = (e, task) => {
    const newTask = toDos.map((todo) => {
      todo.id === task.id && (todo.action = e.target.value);
      return todo;
    });
    setToDos(newTask);
  };

  const handleFinishEditing = (task) => {
    const newTasks = toDos.map((todo) => {
      if (todo.action) {
        todo.id === task.id && (todo.isEditing = false);
      } else {
        alert("To-Do can not be empty");
      }
      return todo;
    });
    setToDos(newTasks);
  };

  return (
    <div className={`min-vh-100 ${isDarkMode && "bg-dark"}`}>
      <div
        className={`container d-flex flex-column ${isDarkMode && "bg-dark"}`}
      >
        <Modeswitch darkMode={isDarkMode} onModeChange={handleModeSwitch} />
        <h2
          className={`text-center my-3 p-2 ${
            isDarkMode ? "bg-secondary text-white" : "bg-secondary-subtle"
          }`}
        >
          My To-Do list, {toDos.filter((todo) => !todo.isDone).length} tasks
          remaining
        </h2>
        <TextInput onAddTask={handleAddTask} darkMode={isDarkMode} />
        <TableView
          todos={toDos.filter((todo) => !todo.isDone)}
          onMarkComplete={handleCompleteTask}
          onDeleteTask={handleDeleteTask}
          onStartEditing={handleStartEditing}
          onEditChange={handleEditChange}
          onFinishEditing={handleFinishEditing}
          darkMode={isDarkMode}
        />
        <h4
          className={`text-center my-3 p-2 ${
            isDarkMode ? "bg-secondary text-white" : "bg-secondary-subtle"
          }`}
        >
          <button
            className="btn btn-success btn-sm mx-2"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "Hide" : "Show"}
          </button>
          The List of Completed Task
        </h4>
        {isVisible && (
          <TableView
            todos={toDos.filter((todo) => todo.isDone)}
            onMarkComplete={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
            onStartEditing={handleStartEditing}
            onEditChange={handleEditChange}
            onFinishEditing={handleFinishEditing}
            darkMode={isDarkMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
