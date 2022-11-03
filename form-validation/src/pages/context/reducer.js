
export const intialValue={
    task:[]
}

export const stateReducer= (state , action)=>{
    console.log(action);
    // if(action.type === "add_task"){
    //     return{
    //         // ...state.task,
    //         task:action.payload
    //     }
    // }
    // else{
    //     return state;
    // }
    switch(action.type){
        case 'add_task':
            return {task: action.payload};
        case 'del_task':
            console.log("mani",state.task,action.payload);
            return{
                ...state,
                task: state.task.filter((item)=>item.id !== action.payload)
            }
        case 'default_change':
            return{
                task:state.task.map((item)=>{
                    if(item.id === action.payload){
                        return { ...item, defaultValue:!item.defaultValue}
                    }
                    return item;
                })
            }
        default:
            return state
    }
}