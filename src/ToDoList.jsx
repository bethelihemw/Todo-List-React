import React, {useState} from "react"


function ToDoList(){

    const [tasks, setTasks] = useState(["Eat waffle for breakfast","Take a long shower","Get ready for work"])
    const [newTasks, setNewTasks] = useState([])

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }
    function addTask(){
        if(newTasks.trim() !== ""){
            setTasks(t => [...t, newTasks]);
            setNewTasks("")
        }
        
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks)
    }
    function moveTaskUp(index){
        if(index >0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index -1],updatedTasks[index]]
            setTasks(updatedTasks)}
    }
    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index +1]] = [updatedTasks[index + 1],updatedTasks[index]]
            setTasks(updatedTasks)
    }
    }

    return(
        <div className="todolist">
            <h1>ToDo List</h1>
            <div>
                <input type="text"  placeholder="Enter a task..." value={newTasks} onChange={handleInputChange}/>
                <button className="addbtn" onClick={addTask}>
                    Add Task
                </button>
            </div>
            <ol className="lists">
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