import React from "react";
import { useState } from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "Run errands", details: "Pick up Katty's present before 17hrs."},
    { id: 933373, task: "Run errands v2", details: "Pick up dinner before 17hrs."},
    { id: 933374, task: "Run errands v4", details: "Pick up dinner before 17hrs."}, { id: 933375, task: "Run errands v5", details: "Pick up dinner before 17hrs."},
    { id: 933376, task: "Run errands v6", details: "Pick up dinner before 17hrs."},
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
        <div className="flex flex-col items-center w-full h-full bg-stone-200 pt-10 mt-10 rounded-lg">
            <h1 className="flex p-5 mb-5 text-5xl underline decoration-cyan-500 text-white bg-black font-titleFont rounded-lg ">Tuskyng</h1>
            <div className="grid grid-col md:grid-cols-2 justify-items-center  p-5 md:p-10">
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

    // page refreshing when submitting form, prevent refresh.

    return(
        <>
            <div className=" flex flex-col items-center md:m-5 rounded-lg w-full">

                <form className=" md:bg-black rounded-xl md:p-4" >
                    <label className="bg-yellow-400 p-3 md:p-10 block text-gray-700 text-sm md:text-2xl font-bold mb-5">What do you need to do today?</label>

                    <div className=" flex flex-col justify-items-start mb-5">
                        <label className=" w-20 p-1 bg-blue-400 text-white text-sm md:text-xl font-bold mb-2 rounded-xl">Task</label>
                        <input className=" w-44 md:w-52 shadow appearance-none border rounded text-sm md:text-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" value={taskName} onChange={handleAddTaskName}/>
                    </div>

                    <div className=" items-start mb-2 md:mb-5">
                        <label className=" col-start-1 text-gray-700 md:text-white text-sm md:text-xl font-bold mb-2">Description</label>
                        <textarea className="block w-full p-3 text-sm md:text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={taskDescription} onChange={handleAddDescription}/>
                    </div>

                    <button className="items-center w-28 md:w-60 md:p-5  bg-blue-300 hover:bg-green-500 rounded-lg" onSubmit={handleSubmit} onClick={handleDisplayClose} ><p className=" w-full text-xl md:text-2xl font-bold text-white italic">ADD</p></button>
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
        <div className="grid w-48 md:w-80 justify-items-center bg-red-300 hover:bg-green-400 rounded-xl p-2 md:p-4 my-2 md:my-4">

            <h1 className="bg-yellow-400 p-2 block text-gray-700 text-sm md:text-2xl font-bold mb-2 md:mb-5">Task Description</h1>
            <div className="flex flex-col justify-items-start p-3 mb-1 md:mb-5 bg-blue-200 rounded-xl">
                <h3 className="col-start-1 text-red-700 text-sm md:text-xl font-bold md:mb-2 underline"> Pick up present{infoTask.task}</h3>
                <p className="p-2 md:p-4 mt-2 md:mt-4 bg-slate-300 rounded-xl text-balance text-sm md:text-md font-bold">Pick up Katty's present before 17hrs.{infoTask.details}</p>
            </div>
        </div>
    );
};

/////////////////////////////////////////////////////////////////////////
//                           Button
/////////////////////////////////////////////////////////////////////////
/*
function Button({ children, handleDeleteTask }){
    return(
        <button className="bg-blue-300 rounded text-bold" onClick={handleDeleteTask} >{children}</button>
    );
};

*/
/////////////////////////////////////////////////////////////////////////
//                           Task List
/////////////////////////////////////////////////////////////////////////

function TaskList({ taskInfo, onHandleSelect, handleDeleteTask }) {

    // after deleting all components should display "no tasks"

    /////// Temporarily fixed ///////

    // try to use ternay operator to check if there are any item on the list, either to display or to show no task list. 

    return(
        <div className="flex flex-col py-2 md:p-4 md:m-5">
            <label className="flex justify-center md:h-16 bg-yellow-400 p-2 m-3 md:m-5 text-gray-700 text-sm md:text-2xl font-bold">Next task to do is...</label>
            <ul className="grid h-64 md:h-96 overflow-auto bg-black rounded-xl md:p-6">
                { taskInfo.length >= 2 ? taskInfo.map((task) => <TaskItem taskInfo={task} key={task.id} onHandleSelect={onHandleSelect} handleDeleteTask={handleDeleteTask}/>) : <NoTasks /> }

                {/*taskInfo.map((task) => <TaskItem taskInfo={task} key={task.id} onHandleSelect={onHandleSelect} handleDeleteTask={handleDeleteTask}/>)  */}

            </ul>
        </div>
    );
};

function NoTasks() {

    return( 
        <li className="flex flex-row justify-between bg-blue h-16 bg-blue-500 hover:text-white rounded-xl m-4">
            <p className="flex m-2 md:m-4 font-bold text-sm md:text-2xl">NO TASK YET</p>
        </li>
    )
};

/////////////// map items list in TaskItem Component //////////////////

function TaskItem({ taskInfo, onHandleSelect, handleDeleteTask }) {

    const [finisedTask, setFinishedTask] = useState(false);

    function handleCrossed(done) {
        setFinishedTask(!done);
    }


    const crossTask = "line-through";
    
    return(
        <li className="flex flex-row justify-between  bg-white hover:bg-blue-500 hover:text-white rounded-xl m-4" onClick={() => onHandleSelect(taskInfo)}>
            <p className="flex m-2 md:m-4 font-bold text-sm md:text-2xl">{taskInfo.task}</p>
            <span className="flex hover:text-red-500 rounded-xl font-bold text-md md:text-2xl pr-2 md:px-1 md:mr-4"><button onClick={handleDeleteTask}>X</button></span>
        </li>
    )
};
