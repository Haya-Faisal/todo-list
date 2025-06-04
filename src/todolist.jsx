import React,{useState} from "react"

function Todolist(){
     const [tasks, setTasks] = useState(["Add task here"]);
     const [newTask, setNewTask] = useState("");

     function handleInputChange(event){
        setNewTask(event.target.value);
     }

     function addtask() {
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
     }

     function deletetask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
     }

     function movetaskup(index){
         if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
     }

     function movetaskdown(index){
         if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
     }

     return(
        <div classname="to-do-list"> 
            <h1>To-Do-List</h1>
            <div>
                <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                 <button
                 className="add-button"
                 onClick={addtask}>
                 Add
                </button>
            </div>
             <ol>
                {tasks.map((task, index) => 
                 <li key={index}>
                      <span className="text">{task}</span>
                      <button
                         className="delete-button"
                         onClick={() => deletetask(index)}>
                         Delete
                      </button>
                      <button
                         className="move-button"
                         onClick={() => movetaskup(index)}>
                         ☝
                      </button>
                      <button
                         className="move-button"
                         onClick={() => movetaskdown(index)}>
                         👇
                     </button>
                 </li>
              )}
            </ol>


        </div>
     )

}
export default Todolist