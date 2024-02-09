import React from "react";

const List = [
    { id: 118836, task: "Go for a run", details: "Today I want to run 4.5km."}, 
    { id: 933372, task: "run errands", details: "Pick up Katty's present before 17hrs."}
];



function ToDoList() {

    // useState

    return(
        <div>
            <h2>TuskyTusky</h2>
            <InputTasks />
            <TaskList />
        </div>
    )
};

function InputTasks() {

    return(
        <div>
            <label>What do you need to do?</label>
            <input type="text"/>
            <button>ADD</button>
            <div>
                <h3>taskName</h3>
                <div>Details</div>
            </div>
        </div>
    )

};

function TaskList() {

    return(
        <div>
            <label>Next task to complete is...</label>
            <ul>
                <li>lalalalla</li>
                <li>lalalalla</li>
                <li>lalalalla</li>
            </ul>
        </div>
    )
};