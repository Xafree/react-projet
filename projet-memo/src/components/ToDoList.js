import React from 'react';
import ToDo from'./ToDo';

const ToDoList = ({tasks, match}) => {
    let filteredTask;

    switch(match.params.filter){
        case 'completed' :
                filteredTask = tasks.filter(task => task.completed);
            break;
        default :
            filteredTask = tasks;
    }

    if( filteredTask.length === 0 ){

        return(
            <ul className="list-group m-3">
                <li className="list-group-item"> Aucune tâche(s) est accomplie(s)</li>
            </ul>
        )
        
    } else {

        return(
            <ul className="list-group m-3">
                {
                    filteredTask.map((task) => <ToDo task={task} key={task.id} />)
                }
            </ul>
        )
    }
}
export default ToDoList;