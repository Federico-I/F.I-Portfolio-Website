import React, { useState } from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "run errands", details: "Pick up Katty's present before 17hrs."}
];



export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(List);
    const [selectedTask, setSelectedTask] = useState(false);


    function handleAddTask(newTask) {
        setGeneralTasks([...generalTasks, newTask]);
    }; 

    function handleSelect() {

    };

    return(
        <div className="app">
            <h1>TuskyTusky</h1>
            <InputTasks addTask={handleAddTask} generalTasks={generalTasks} />
            <TaskList generalTasks={generalTasks} onSelect={handleSelect} />
        </div>
    );
};

function InputTasks({ generalTasks, addTask }) {

    // generate new id' for every item

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    function handleAddTaskName(e) {
        setTaskName(e.taget.value);
    };

    function handleAddDescription(e) {
        setTaskDescription(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDeafult();

        if (!taskName || !TaskDescription) return;

        const genrateId = crypto.randomUUID;

        const newTask = {
            id: `${genrateId}`,
            task: `${taskName}`,
            details: `${taskDescription}`,
        }

        addTask(newTask);
    };

    return(
        <div className="sidebar">
            <form onSubmit={handleSubmit}>
                <label>What do you need to do?</label>
                <input type="text" value={taskName} onChange={handleAddTaskName}/>
                <input type="text"value={taskDescription} onChange={handleAddDescription}/>
                <Button>ADD</Button>
            </form>
            <TaskDescription generalTasks={generalTasks}/>
        </div>
    );
};

function TaskList({ generalTasks }) {

    // will display task info depending on selected task managed by state 

    return(
        <div>
            <label>Next task to do is...</label>
            <ul>
                {generalTasks.map((item) => <TaskItem taskInfo={item} key={item.id}/>)}
            </ul>
        </div>
    );
};

function TaskItem({ taskInfo }) {
    return(
        <li>{taskInfo.task}</li>
    )
}

function TaskDescription({ generalTasks }) {

    // should only appear if thre is an itme selected cnoditional rendering.

    return(
        <div>
            <h1>Task Description</h1>
            <div>
                <h3>taskName</h3>
                <div>Details</div>
            </div>
        </div>
    );
};

function Button({ children }){
    return(
        <button className="button" >{children}</button>
    );
};