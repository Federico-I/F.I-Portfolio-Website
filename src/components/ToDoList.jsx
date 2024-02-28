import React, { useState } from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "run errands", details: "Pick up Katty's present before 17hrs."}
];


/////////////////////////////////////////////////////////////////////////
//                         Main
/////////////////////////////////////////////////////////////////////////


export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(List);
    const [displayContent, setDisplayContent] = useState(false);

    const [selectedTask, setSelectedTask] = useState("");



    function handleAddTask(newTask) {
        setGeneralTasks([...generalTasks, newTask]);
    };

    // previous item selected will be closed
    // only display the id selected, one at a time. if there is any open close automatically

    function handleSelect(taskInfo) {
        setSelectedTask(taskInfo);
        setDisplayContent(true);

    };

    function handleDisplayClose() {
        setDisplayContent(false);
    }

    /*
    function handleShowContent(generalTasks){
        setDisplayContent(generalTasks.id === selectedTask.id ? setDisplayContent(true) : "");
    }
    */

    return(
        <div className="app">
            <h1>TuskyTusky</h1>
            <InputTasks addTask={handleAddTask} generalTasks={generalTasks} showContent={displayContent} taskSelected={selectedTask} handleDisplayClose={handleDisplayClose}/>
            <TaskList taskInfo={generalTasks} onHandleSelect={handleSelect} taskSelected={selectedTask}/>
        </div>
    );
};

/////////////////////////////////////////////////////////////////////////
//                          Input
/////////////////////////////////////////////////////////////////////////

function InputTasks({ generalTasks, addTask, showContent, taskSelected, handleDisplayClose }) {

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
            <form onSubmit={handleSubmit} onClick={handleDisplayClose}>
                <label>What do you need to do?</label>
                <input type="text" value={taskName} onChange={handleAddTaskName}/>
                <input type="text"value={taskDescription} onChange={handleAddDescription}/>
                <Button>ADD</Button>
            </form>
            { showContent && <TaskDescription taskSelected={taskSelected} generalTasks={generalTasks}/>}
        </div>
    );
};

/////////////////////////////////////////////////////////////////////////
//                           Task List
/////////////////////////////////////////////////////////////////////////

function TaskList({ taskInfo, onHandleSelect}) {

    // will display task info depending on selected task managed by state 

    return(
        <div>
            <label>Next task to do is...</label>
            <ul>
                {taskInfo.map((task) => <TaskItem taskInfo={task} key={task.id} onHandleSelect={onHandleSelect}/>)}
            </ul>
        </div>
    );
};

function TaskItem({ taskInfo, onHandleSelect}) {
    return(
        <li onClick={() => onHandleSelect(taskInfo)} >{taskInfo.task}</li>
    )
};

/////////////////////////////////////////////////////////////////////////
//                        Task Description
/////////////////////////////////////////////////////////////////////////

function TaskDescription({ generalTasks, taskSelected }) {

   const infoTask = generalTasks.map((task) => task.id === taskSelected.id);

    return(
        <div>
            <h1>Task Description</h1>
            <div>
                <h3>{infoTask.task}</h3>
                <div>{infoTask.details}</div>
            </div>
        </div>
    );
};

function Button({ children }){
    return(
        <button className="button" >{children}</button>
    );
};