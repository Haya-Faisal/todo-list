import './App.css';
import ToDoList from "./todolist"

function App() {
  return (
    <div className="app-background">
      <div className="overlay-rectangle">
        <ToDoList/>
      </div>     
    </div>
  );
}

export default App;
