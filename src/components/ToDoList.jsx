import React, { useState } from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "run errands", details: "Pick up Katty's present before 17hrs."}
];



export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(List);
    const [selectedTask, setSelectedTask] = useState("");


    function handleAddTask() {

    }; 

    function handleSelect() {

    };

    return(
        <div className="app">
            <h1>TuskyTusky</h1>
            <InputTasks addTask={handleAddTask}/>
            <TaskList generalTasks={generalTasks} onSelect={handleSelect} />
        </div>
    );
};

function InputTasks() {

    // when create new task remember to create an unic id for that comp

    // create add new task handleAdd function

    return(
        <div className="sidebar">
            <form>
                <label>What do you need to do?</label>
                <input type="text"/>
                <Button>ADD</Button>
            </form>
            <TaskDescription />
        </div>
    );
};

function TaskList({ generalTasks }) {

    // will display task info depending on selected task managed by state 

   // generate new id' for every item

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

function TaskDescription() {

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