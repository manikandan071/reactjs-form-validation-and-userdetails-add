
export const intialValue={
    task:[]
}

export const stateReducer= (state , action)=>{
    console.log(action);
    if(action.type === "add_task"){
        return{
            // ...state.task,
            task:action.payload
        }
    }
    else{
        return state;
    }
    
}