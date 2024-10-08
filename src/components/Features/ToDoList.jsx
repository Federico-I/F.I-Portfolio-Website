import React from "react";
import { useState } from "react";
import { informationData } from "../../data/infoData.js";


const listData = informationData.map((item) => item.list);

console.log(listData);

/////////////////////////////////////////////////////////////////////////
//                         Main - Component
/////////////////////////////////////////////////////////////////////////


export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(listData[0]);
    const [displayContent, setDisplayContent] = useState(true);
    const [selectedTask, setSelectedTask] = useState(0);

    console.log(generalTasks);

    function handleAddTask(newTask) {
        setGeneralTasks((generalTasks) => [...generalTasks, newTask]);
    };

    function handleDeleteTask(deletedID) {
        setSelectedTask(0);
        setGeneralTasks((generalTasks) => generalTasks.filter((task) => task.id !== deletedID));
    };

    function handleSelect(taskID) {
        setSelectedTask(taskID);
        setDisplayContent(true);
    };

    function handleDisplayClose() {
        setDisplayContent(false);
    };

    ////////////////////////////////////////////////////
    //  Feature Implementation -actually disabled.

    // function handleShowContent(generalTasks){
    //     setDisplayContent(generalTasks.id === selectedTask.id ? setDisplayContent(true) : "");
    // }

    return(
        <div className="flex flex-col items-center w-full h-full bg-stone-200 pt-10 mt-10 rounded-lg">
            <p className="w-full pb-5 md:pl-10 text-black text-center md:text-start text-3xl font-titleFont">Let's play with...</p>
            <h1 className="flex p-5 text-5xl underline decoration-cyan-500 text-white bg-black font-titleFont rounded-lg ">Tuskyng</h1>
            <div className="grid grid-col xl:grid-cols-2 justify-items-center  p-5 md:p-10">
                <InputTasks onAddTask={handleAddTask} generalTasks={generalTasks} showContent={displayContent} selectedTaskID={selectedTask} handleDisplayClose={handleDisplayClose}/>
                <TaskList generalTasks={generalTasks} onHandleSelect={handleSelect} taskSelected={selectedTask} handleDeleteTask={handleDeleteTask}/>
            </div>
        </div>
    );
};

/////////////////////////////////////////////////////////////////////////
//                         Small List Components
/////////////////////////////////////////////////////////////////////////

function NoTasks() {

    return( 
        <li className="flex flex-row justify-center bg-blue h-16 bg-blue-500 rounded-xl m-4">
            <p className="flex m-2 md:m-4 font-bold text-sm text-center md:text-3xl text-white">ADD NEW TASK</p>
        </li>
    )
};


function Button({ type, children, onClick, className }) {
    return(
        <button type={type} className={className} onClick={onClick}>{children}</button>
    )
}

/////////////////////////////////////////////////////////////////////////
//                           Task List
/////////////////////////////////////////////////////////////////////////

function TaskList({ generalTasks, onHandleSelect, handleDeleteTask }) {

    const tasksLength = generalTasks.length;

    return(
        <div className="flex flex-col w-full md:w-85 py-2 md:p-4 md:m-5">
            <label className="flex justify-center item-justify-center md:h-16 bg-yellow-400 p-2 m-3 md:m-5 text-gray-700 text-sm md:text-2xl font-bold">Next task to do is...
            </label>
            <ul className="flex flex-col h-64 md:h-96 overflow-auto bg-black rounded-xl md:p-6">
                { tasksLength >= 1 ? generalTasks.map((task) => 
                    <TaskItem individualTask={task} key={task.id} onHandleSelect={onHandleSelect} handleDeleteTask={handleDeleteTask}/>) : <NoTasks />
                }
            </ul>
        </div>
    );
};

/////////////////////////////////////////////////////////////////////////
//                           Task Item
/////////////////////////////////////////////////////////////////////////

function TaskItem({ individualTask, onHandleSelect, handleDeleteTask }) {
    
    return(
        <li className="flex flex-row justify-between items-center bg-white hover:bg-blue-500 hover:text-white rounded-xl m-4" >
            <p className="flex w-28 md:w-64 m-2 md:m-4 font-bold text-sm truncate md:text-2xl pointer-grab" onClick={() => onHandleSelect(individualTask.id)} >{individualTask.task}</p>
            <Button type="button" className="flex hover:text-red-500 rounded-xl font-bold text-md md:text-2xl pr-2 md:px-1 md:mr-4" onClick={()=> handleDeleteTask(individualTask.id)}>X</Button>
        </li>
    );
};

/////////////////////////////////////////////////////////////////////////
//                       ADD Task - Input Task
/////////////////////////////////////////////////////////////////////////

function InputTasks({ onAddTask, generalTasks, showContent, selectedTaskID, handleDisplayClose }) {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    function handleSubmit() {

        if (!taskName || !TaskDescription) return;

        const Id = crypto.randomUUID();

        const newTask = {
            id: `${Id}`,
            task: `${taskName}`,
            details: `${taskDescription}`,
        };

        onAddTask(newTask);

        setTaskName("");
        setTaskDescription("");

        console.log(newTask);
    };

    return(
        <>
            <div className=" flex flex-col items-center md:m-5 rounded-lg w-full">

                <form className=" bg-black rounded-xl p-4 mb-4" >
                    <label className="bg-yellow-400 p-3 md:p-10 block text-gray-700 text-sm md:text-2xl font-bold mb-5">What do you need to do today?</label>

                    <div className=" flex flex-col justify-items-start mb-5">
                        <label className=" w-20 p-1 bg-blue-500 text-white text-sm md:text-xl font-bold mb-2 rounded-xl">Task</label>
                        <input className=" w-44 md:w-52 shadow appearance-none border rounded text-sm md:text-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                    </div>

                    <div className=" items-start mb-2 md:mb-5">
                        <label className=" col-start-1 text-white text-sm md:text-xl font-bold mb-2">Description</label>
                        <textarea className="block w-full p-3 text-sm md:text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}/>
                    </div>

                    <Button type="button" onClick={handleSubmit} className="items-center w-28 md:w-60 md:p-5  bg-blue-500 hover:bg-green-500 rounded-lg text-xl md:text-2xl font-bold text-white italic">ADD</Button>
                </form>
                { showContent && <TaskDescription selectedTaskID={selectedTaskID} generalTasks={generalTasks}/>}
            </div>
        </>
    );
};


/////////////////////////////////////////////////////////////////////////
//                        Task Description
/////////////////////////////////////////////////////////////////////////

function TaskDescription({ generalTasks, selectedTaskID }) {

    const idTask = selectedTaskID;

   const infoTask = generalTasks.filter((task) => task?.id === idTask); 

   return(
        <div className="grid w-42 md:w-80 justify-items-center bg-red-500 hover:bg-green-500 rounded-xl p-2 md:p-4 my-2 md:my-4">

            <h1 className="bg-yellow-400 p-2 block text-gray-700 text-sm md:text-2xl font-bold mb-2 md:mb-5">Task Description</h1>
            <div className="flex flex-col w-full items-center p-3 mb-1 bg-white rounded-xl">
                <h3 className="col-start-1 w-36 md:w-48 text-red-700 text-sm md:text-xl truncate font-bold md:mb-2 underline">{ idTask === 0 ? "No Tasks Selected" : infoTask[0].task}</h3>
                <p className=" w-36 md:w-full p-2 md:p-2  rounded-xl text-balance text-sm md:text-xl font-bold text-wrap">{idTask === 0 ? "Please create and select a task." : infoTask[0].details}</p>
            </div>
        </div>
    );
};