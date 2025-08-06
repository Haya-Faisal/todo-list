import './App.css';
import ToDoList from "./todolist"
import DateTime from './datetime';
import { ThemeToggle } from './toggle';

function App() {
  return (
    <div className="app-background">
      <ThemeToggle/>
      <div className='overlay-rectangledate'>
        <DateTime/>
      </div>
      
      <div className="overlay-rectangle">
        <ToDoList/>
      </div>     
    </div>
  );
}

export default App;
