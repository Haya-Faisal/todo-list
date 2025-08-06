import React, { useState } from "react";

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [completedIndices, setCompletedIndices] = useState([]);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addtask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const toggleComplete = (index) => {
        setCompletedIndices(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index) 
                : [...prev, index]
        );
    };

    function movetaskup(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function movetaskdown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list"> 
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Write your task here..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addtask}
                >
                    +
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span 
                            className="text"
                            onClick={() => toggleComplete(index)}
                            style={{ 
                                textDecoration: completedIndices.includes(index) ? "line-through" : "none",
                                cursor: "pointer",
                                color: completedIndices.includes(index) ? "rgb(121,86,99)" : "inherit"
                            }}
                        >
                            {task}
                        </span>
                        {/* <button
                            className="delete-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                deletetask(index);
                            }}
                        >
                            Delete
                        </button> */}
                        <button
                            className="move-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                movetaskup(index);
                            }}
                        >
                            ☝
                        </button>
                        <button
                            className="move-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                movetaskdown(index);
                            }}
                        >
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default Todolist;