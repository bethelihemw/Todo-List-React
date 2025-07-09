import React, {useState} from "react"


function ToDoList(){

    const [tasks, setTasks] = useState(["eat breakfast", "tale a shower"])
    const [newTasks, setNewTasks] = useState([])

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

    return(
        <div className="todolist">
            <h1>ToDo List</h1>
            <div>
                <input type="text"  placeholder="Enter a Task..." value={newTasks} onChange={handleInputChange}/>
                <button className="btn" onClick={addTask}>
                    Add Task
                </button>
            </div>
            <ol>
                {
                    tasks.map((task, index) => <li key = {index}> 
                    <span className="text">{task}</span> 
                    <button className="deletebtn" onClick={() => deleteTask(index)}> Delete</button>
                    <button className="upbtn" onClick={() => moveTaskUp(index)}> Up</button>
                    <button className="downbtn" onClick={() => moveTaskDown(index)}> Down</button>
                    
                    </li>)
                    
                    
                }
            </ol>
        </div>
    )
}

export default ToDoList