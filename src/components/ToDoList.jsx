import React, { useState } from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "run errands", details: "Pick up Katty's present before 17hrs."}
];


/////////////////////////////////////////////////////////////////////////
//                              Main
/////////////////////////////////////////////////////////////////////////


export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(List);
    const [displayContent, setDisplayContent] = useState(false);

    const [selectedTask, setSelectedTask] = useState("");


    function handleAddTask(newTask) {
        setGeneralTasks([...generalTasks, newTask]);
    };

    function handleSelect(taskInfo) {
        setSelectedTask(taskInfo);
        setDisplayContent(true);

    };

    function handleDisplayClose() {
        setDisplayContent(false);
    }

    function handleDeleteTask(id) {
        setGeneralTasks((generalTasks) => [generalTasks.filter((tasks) => tasks.id === id)]);
    }

    /*
    function handleShowContent(generalTasks){
        setDisplayContent(generalTasks.id === selectedTask.id ? setDisplayContent(true) : "");
    }
    */

    return(
        <div className="flex flex-col items-center justify-center w-full h-full bg-stone-300 py-10 my-10 rounded-lg">
            <h1 className="flex justify-center p-5 text-5xl md:text-5xl underline decoration-cyan-500 text-white bg-black font-titleFont">TuskyTusky</h1>
            {/*<div className="flex flex-col">
                <InputTasks addTask={handleAddTask} generalTasks={generalTasks} showContent={displayContent} taskSelected={selectedTask} handleDisplayClose={handleDisplayClose}/>
                <TaskList taskInfo={generalTasks} onHandleSelect={handleSelect} taskSelected={selectedTask} handleDeleteTask={handleDeleteTask}/>
            </div>*/}
        </div>
    );
};

/////////////////////////////////////////////////////////////////////////
//                           Task List
/////////////////////////////////////////////////////////////////////////

function TaskList({ taskInfo, onHandleSelect, handleDeleteTask }) {

    return(
        <div>
            <label>Next task to do is...</label>
            <ul>
                {taskInfo.map((task) => <TaskItem taskInfo={task} key={task.id} onHandleSelect={onHandleSelect} handleDeleteTask={handleDeleteTask}/>)}
            </ul>
        </div>
    );
};

function TaskItem({ taskInfo, onHandleSelect, handleDeleteTask }) {

    const [finisedTask, setFinishedTask] = useState(false);

    function handleCrossed(done) {
        setFinishedTask(!done);
    }


    const crossTask = "line-through";
    
    return(
        <div onClick={() => onHandleSelect(taskInfo)}>
            <li style={ finisedTask ? crossTask : ""} onClick={handleCrossed} >{taskInfo.task}</li>
            <Button onClick={handleDeleteTask}>Delete</Button>
        </div>
    )
};

/////////////////////////////////////////////////////////////////////////
//                             Input
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

/////////////////////////////////////////////////////////////////////////
//                           Button
/////////////////////////////////////////////////////////////////////////

function Button({ children, handleDeleteTask }){
    return(
        <button className="button" onClick={handleDeleteTask} >{children}</button>
    );
};