import React, { useContext, useState } from 'react'
import './cart.css'
import { stateCondex } from '../context/contex';


const Cart = () => {
    const {state , dispatch}=useContext(stateCondex);
    console.log(state.task);
    const [userInput ,setInput]=useState('');
    const [usermsg , setuserMsg] = useState('');
    // const [task,setTask]=useState([]);
    // console.log(task);
    const userData=(value)=>{
        if(value.target.name === 'userdata'){
            setInput(value.target.value);
    }
    else{
        setuserMsg(value.target.value);
    }
}
// let display=document.getElementById('display');
// function showing(items){
//     items.forEach(data => {
//         let h=document.createElement("h3");
//         h.innerText=data.userinput;
//         display.append(h);
//         let pera=document.createElement('p');
//         pera.innerText=data.usermsg;
//         display.append(pera);
//     });
// }
const userSubmit=(value)=>{
    value.preventDefault();
    console.log(userInput,usermsg);
    // setTask([...task,{'userinput':userInput,'usermsg':usermsg}]);
    const data={
        userInput,
        usermsg,
    };
    dispatch({type:"add_task", payload : [...state.task , data]});
    // showing(arr);
}
// console.log(arr);
  return (
    <div>
        <div>
            <h4>Logo</h4>
        </div>
        <div className='user-input'>
            <form>
                <input placeholder='Description' name='userdata' onChange={userData}/>
                <textarea name='description' onChange={userData}/>
                <button onClick={(value)=>userSubmit(value)}>Add</button>
            </form>
        </div>
        
    </div>
  )
}

export default Cart