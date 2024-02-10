import React, { useState } from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "run errands", details: "Pick up Katty's present before 17hrs."}
];



export default function ToDoList() {

    const [generalTasks, setGeneralTasks] = useState(List);

    return(
        <div className="app">
            <h1>TuskyTusky</h1>
            <InputTasks />
            <TaskList />
        </div>
    );
};

function InputTasks() {

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

function TaskList() {

    // will display task info depending on selected task manageb by state 

    //every list item will be rendered from List using .map

    return(
        <div>
            <label>Next task to complete is...</label>
            <ul>
                <li>lalalalla</li>
                <li>lalalalla</li>
                <li>lalalalla</li>
            </ul>
        </div>
    );
};

function TaskDescription() {

    return(
        <div>
            <h3>taskName</h3>
            <div>Details</div>
        </div>
    );
};

function Button({ children }){
    return(
        <button className="button" >{children}</button>
    );
};