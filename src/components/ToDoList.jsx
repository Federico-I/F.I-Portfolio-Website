import React from "react";
import { useState } from "react";

const list = [
    { 
        id: 118836, 
        task: "Go for a run", 
        details: "Today I want to run 4.5km."
    }, 
    { 
        id: 933372, 
        task: "Run errands", 
        details: "Pick up Katty's present before 17hrs."
    },
    { 
        id: 933373, 
        task: "Run errands v2", 
        details: "Pick up dinner before 17hrs."
    }
];

function Button({ children, onClick, className }) {
    return(
        <button className={className} onClick={onClick}>{children}</button>
    )
}

/////////////////////////////////////////////////////////////////////////
//                              Main
/////////////////////////////////////////////////////////////////////////


export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(list);
    const [displayContent, setDisplayContent] = useState(true);

    const [selectedTask, setSelectedTask] = useState("");

    function handleAddTask(newTask) {
        setGeneralTasks((generalTasks) => [...generalTasks, newTask]);
    };

    function handleSelect(taskInfo) {
        setSelectedTask(taskInfo);
        setDisplayContent(true);
    };

    function handleDisplayClose() {
        setDisplayContent(false);
    }

    function handleDeleteTask(deletedId) {
        setGeneralTasks((generalTasks) => [generalTasks.filter((task) => task.id === deletedId)]);
    }

    /*
    function handleShowContent(generalTasks){
        setDisplayContent(generalTasks.id === selectedTask.id ? setDisplayContent(true) : "");
    }
    */

    return(
        <div className="flex flex-col items-center w-full h-full bg-stone-200 pt-10 mt-10 rounded-lg">
            <h1 className="flex p-5 mb-5 text-5xl underline decoration-cyan-500 text-white bg-black font-titleFont rounded-lg ">Tuskyng</h1>
            <div className="grid grid-col md:grid-cols-2 justify-items-center  p-5 md:p-10">
                <InputTasks onAddTask={handleAddTask} generalTasks={generalTasks} showContent={displayContent} taskSelected={selectedTask} handleDisplayClose={handleDisplayClose}/>
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
        <li className="flex flex-row justify-between bg-blue h-16 bg-blue-500 hover:text-white rounded-xl m-4">
            <p className="flex m-2 md:m-4 font-bold text-sm md:text-2xl">NO TASK YET</p>
        </li>
    )
};

/////////////////////////////////////////////////////////////////////////
//                           Task List
/////////////////////////////////////////////////////////////////////////

function TaskList({ generalTasks, onHandleSelect, handleDeleteTask }) {

    //////////////////////////////////
    //     fix code not ready yet
    /////////////////////////////////

    ////// No task implementation pendent

    return(
        <div className="flex flex-col py-2 md:p-4 md:m-5">
            <label className="flex justify-center md:h-16 bg-yellow-400 p-2 m-3 md:m-5 text-gray-700 text-sm md:text-2xl font-bold">Next task to do is...
            </label>
            <ul className="grid h-64 md:h-96 overflow-auto bg-black rounded-xl md:p-6">
                {generalTasks.map((task) => 
                    <TaskItem individualTask={task} key={task.id} onHandleSelect={onHandleSelect} handleDeleteTask={handleDeleteTask}/>    
                )}
            </ul>
        </div>
    );
};


function TaskItem({ individualTask, onHandleSelect, handleDeleteTask }) {

    const [completedTask, setCompletedTask] = useState(false);

    function handleCrossed(done) {
        setCompletedTask(!done);
    }

    const crossTask = "line-through";

    //////////////////////////////////////
    //      fix code not ready yet
    //////////////////////////////////////

    // list component should be a button to submit onclick => send ask to state
    
    return(
        <li className="flex flex-row justify-between items-center bg-white hover:bg-blue-500 hover:text-white rounded-xl m-4" onClick={() => onHandleSelect(individualTask)}>
            <p className="flex m-2 md:m-4 font-bold text-sm md:text-2xl">{individualTask.task}</p>
            <Button className="flex hover:text-red-500 rounded-xl font-bold text-md md:text-2xl pr-2 md:px-1 md:mr-4" onClick={handleDeleteTask}>X</Button>
        </li>
    );
};

/////////////////////////////////////////////////////////////////////////
//                             Input
/////////////////////////////////////////////////////////////////////////

function InputTasks({ generalTasks, onAddTask, showContent, taskSelected, handleDisplayClose }) {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    function handleSubmit(e) {
        e.preventDeafult();

        if (!taskName || !TaskDescription) return;

        const Id = crypto.randomUUID();

        const newTask = {
            id: `"${Id}"`,
            task: `"${taskName}"`,
            details: `"${taskDescription}"`,
        };

        onAddTask(newTask);

        setTaskName("");
        setTaskDescription("");
    };

    // page refreshing when submitting form, prevent refresh.

    // button add not working, no itme added onclick

    // state not udpated or displayed

    return(
        <>
            <div className=" flex flex-col items-center md:m-5 rounded-lg w-full">

                <form className=" md:bg-black rounded-xl md:p-4" onSubmit={handleSubmit} >
                    <label className="bg-yellow-400 p-3 md:p-10 block text-gray-700 text-sm md:text-2xl font-bold mb-5">What do you need to do today?</label>

                    <div className=" flex flex-col justify-items-start mb-5">
                        <label className=" w-20 p-1 bg-blue-400 text-white text-sm md:text-xl font-bold mb-2 rounded-xl">Task</label>
                        <input className=" w-44 md:w-52 shadow appearance-none border rounded text-sm md:text-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                    </div>

                    <div className=" items-start mb-2 md:mb-5">
                        <label className=" col-start-1 text-gray-700 md:text-white text-sm md:text-xl font-bold mb-2">Description</label>
                        <textarea className="block w-full p-3 text-sm md:text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}/>
                    </div>

                    <Button className="items-center w-28 md:w-60 md:p-5  bg-blue-300 hover:bg-green-500 rounded-lg text-xl md:text-2xl font-bold text-white italic">ADD</Button>
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

    // need to access the object where taskSelected matches with the taskID

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