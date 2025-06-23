// export default function ToDo({task,isDone}){
//     return(
//         <li className="student">Task:{task} and Its {isDone}</li>
//     )
// }

// export default function ToDo({task,isDone,isCompleted}){
//     if(isDone){
//         return(
//             <li>{task} {isCompleted}</li>
//         )
//     }
//     else{
//         return(
//             <li>{task} {isCompleted}</li>
//         )
//     }
// }
// Conditional Rendering
// export default function ToDo({task,isDone}){
//     return isDone || <li>{task}</li> 
// }
// Conditional Rendering : Using Variable 
export default function ToDo({ task, isDone }) {
    let listItem;
    if (isDone === true) {
        listItem = <li>Done:{task}</li>
    }
    else{
        listItem = <li>Pending:{task}</li>
    }
    return listItem
}