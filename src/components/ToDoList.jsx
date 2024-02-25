import React, { useState } from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "run errands", details: "Pick up Katty's present before 17hrs."}
];



export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(List);
    const [displayContent, setDisplayContent] = useState(false);

    const [selectedTask, setSelectedTask] = useState("");


    function handleAddTask(newTask) {
        setGeneralTasks([...generalTasks, newTask]);
    };

    // BRANCH TEST

    // when item selected setSelectedTask to true and display seleted item info

    // previous item selected will be closed

    // only display the id selected, one at a time. if there is any open close automatically

    function handleSelect(taskInfo) {
        setSelectedTask(taskInfo.id);

    };

    function handleShowContent(generalTasks){
        setDisplayContent(generalTasks.id === selectedTask ? setDisplayContent(true) : "");
    }

    return(
        <div className="app">
            <h1>TuskyTusky</h1>
            <InputTasks addTask={handleAddTask} generalTasks={generalTasks} showContent={displayContent} taskSelected={selectedTask}/>
            <TaskList generalTasks={generalTasks} onHandleSelect={handleSelect} taskSelected={selectedTask} onHandleShowContent={handleShowContent}/>
        </div>
    );
};

function InputTasks({ generalTasks, addTask, showContent, taskSelected }) {

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

    // make sure only one task is open at a time
    // if a new task is open close previous.


    return(
        <div className="sidebar">
            <form onSubmit={handleSubmit}>
                <label>What do you need to do?</label>
                <input type="text" value={taskName} onChange={handleAddTaskName}/>
                <input type="text"value={taskDescription} onChange={handleAddDescription}/>
                <Button>ADD</Button>
            </form>
            { showContent && <TaskDescription generalTasks={generalTasks} taskSelected={taskSelected}/>}
        </div>
    );
};

function TaskList({ generalTasks, onHandleSelect, taskSelected, onHandleShowContent }) {

    // will display task info depending on selected task managed by state 

    return(
        <div>
            <label>Next task to do is...</label>
            <ul>
                {generalTasks.map((task) => <TaskItem taskInfo={task} key={task.id} onHandleSelect={onHandleSelect} taskSelected={taskSelected} />)}
            </ul>
        </div>
    );
};

function TaskItem({ taskInfo, onHandleSelect}) {
    return(
        <li onClick={() => onHandleSelect(taskInfo)} >{taskInfo.task}</li>
    )
};

function TaskDescription({ generalTasks, taskSelected }) {

    // should only appear if thre is an itme selected / conditional rendering.
    // only display selected item info

    const dispalyInfo = generalTasks.map((task) => task.id === taskSelected);

    return(
        <div>
            <h1>Task Description</h1>
            <div>
                <h3>{dispalyInfo.task}</h3>
                <div>{dispalyInfo.details}</div>
            </div>
        </div>
    );
};

function Button({ children }){
    return(
        <button className="button" >{children}</button>
    );
};