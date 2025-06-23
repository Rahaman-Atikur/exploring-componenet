// export default function ToDo({task,isDone}){
//     return(
//         <li className="student">Task:{task} and Its {isDone}</li>
//     )
// }

export default function ToDo({task,isDone,isCompleted}){
    if(isDone){
        return(
            <li>{task} {isCompleted}</li>
        )
    }
    else{
        return(
            <li>{task} {isCompleted}</li>
        )
    }

}