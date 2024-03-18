import React from "react";
import { useState } from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "run errands", details: "Pick up Katty's present before 17hrs."}
];


/////////////////////////////////////////////////////////////////////////
//                              Main
/////////////////////////////////////////////////////////////////////////


export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(List);
    const [displayContent, setDisplayContent] = useState(true);

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

    // input and list are set to grid and not to flex. therefore, Flex won't pass it's styiling classes, check that


    return(
        <div className="flex flex-col items-center w-full h-full bg-stone-200 py-10 my-10 rounded-lg">
            <h1 className="flex p-5 text-5xl md:text-5xl underline decoration-cyan-500 text-white bg-black font-titleFont rounded-lg mb-5">Tuskyng</h1>
            <div className="flex flex-cols-2 md:flex-wrap w-full h-full md:justify-evenly p-5 md:p-10">
                <InputTasks addTask={handleAddTask} generalTasks={generalTasks} showContent={displayContent} taskSelected={selectedTask} handleDisplayClose={handleDisplayClose}/>
                <TaskList taskInfo={generalTasks} onHandleSelect={handleSelect} taskSelected={selectedTask} handleDeleteTask={handleDeleteTask}/>
            </div>
        </div>
    );
};

/////////////////////////////////////////////////////////////////////////
//                             Input
/////////////////////////////////////////////////////////////////////////

function InputTasks({ generalTasks, addTask, showContent, taskSelected, handleDisplayClose }) {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    function handleAddTaskName(e) {
        setTaskName(e.target.value);
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
        <>
            <div className=" flex flex-col items-center md:m-5 rounded-lg w-full">

                <form className="w-full h-full grid justify-items-center md:bg-white rounded-xl md:p-4" >
                    <label className="bg-yellow-400 p-3 md:p-10 block text-gray-700 text-xl md:text-2xl font-bold mb-5">What do you need to do today?</label>

                    <div className=" w-full grid justify-items-start mb-5">
                        <label className=" w-20 p-1 bg-blue-400 text-white text-xl font-bold mb-2 rounded-xl">Task</label>
                        <input className=" shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" value={taskName} onChange={handleAddTaskName}/>
                    </div>

                    <div className="w-full grid justify-items-start mb-5">
                        <label className=" col-start-1 text-gray-700 text-xl font-bold mb-2">Description</label>
                        <textarea className="block w-full p-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={taskDescription} onChange={handleAddDescription}/>
                    </div>

                    <button className="w-full p-5 md:w-40 bg-blue-300 hover:bg-green-500 rounded-lg" onSubmit={handleSubmit} onClick={handleDisplayClose} ><p className=" md:w-full text-xl md:text-2xl font-bold text-white italic">ADD</p></button>
                </form>

                { showContent && <TaskDescription taskSelected={taskSelected} generalTasks={generalTasks}/>}
            </div>
        </>
    );
};


/////////////////////////////////////////////////////////////////////////
//                        Task Description
/////////////////////////////////////////////////////////////////////////

function TaskDescription({ generalTasks, taskSelected }) {

   const infoTask = generalTasks.map((task) => task.id === taskSelected.id);

    return(
        <div className="grid justify-items-center w-full h-full bg-red-300 hover:bg-green-400 rounded-xl p-4 my-4">
            <h1 className="bg-yellow-400 p-2 block text-gray-700 text-2xl font-bold mb-5">Task Description</h1>
            <div className="w-full grid justify-items-start p-3 mb-5 bg-blue-200 rounded-xl">
                <h3 className="col-start-1 text-red-700 text-xl font-bold mb-2 underline"> Pick up present{infoTask.task}</h3>
                <p className="p-4 mt-4 bg-slate-300 rounded-xl text-balance text-md font-bold">Pick up Katty's present before 17hrs.{infoTask.details}</p>
            </div>
        </div>
    );
};

/////////////////////////////////////////////////////////////////////////
//                           Button
/////////////////////////////////////////////////////////////////////////

function Button({ children, handleDeleteTask }){
    return(
        <button className="bg-blue300 rounded text-bold" onClick={handleDeleteTask} >{children}</button>
    );
};


/////////////////////////////////////////////////////////////////////////
//                           Task List
/////////////////////////////////////////////////////////////////////////

function TaskList({ taskInfo, onHandleSelect, handleDeleteTask }) {

    return(
        <div className="grid justify-items-center w-full h-full p-4 m-5">
            <label className=" bg-yellow-400 p-2 m-5 text-gray-700 text-2xl font-bold">Next task to do is...</label>
            <ul className="flex flex-col w-full h-full bg-blue-400 rounded-xl p-6">
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
        <li className="flex justify-center bg-white rounded-xl m-4" onClick={() => onHandleSelect(taskInfo)}>
           { /* <h2 style={ finisedTask ? crossTask : ""} onClick={handleCrossed} >{taskInfo.task}</h2>
            */}
            <p className="flex w-80 justify-center m-4 font-bold text-2xl">lalalallallalalalalal</p>
            <Button className="flex w-full justify-center " onClick={handleDeleteTask}><p className="hover:bg-red-500 hover:border rounded-xl font-bold text-3xl py-1 px-2 ">X</p></Button> 
        </li>
    )
};
