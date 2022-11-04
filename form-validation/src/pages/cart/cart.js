import React, { useContext, useState } from 'react'
import './cart.css'
import { stateCondex } from '../context/contex';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';


const Cart = () => {
    const navigate = useNavigate();
    const [params]= useSearchParams();
    let id=parseInt(params.get('id'));
    console.log(id);
    

    const {state , dispatch}=useContext(stateCondex);
    console.log(state.task);
    let getid= state.task.findIndex(item=>item.id === id);
    console.log(getid);
    const [userInput ,setInput]=useState(state.task[getid]?.usertitle || "");
    const [usermsg , setuserMsg] = useState(state.task[getid]?.userdescription || "");
    const [userDate , setuserDate] =useState(state.task[getid]?.userbirthday || "");
    // const [task,setTask]=useState([]);
    // console.log(task);
    const userData=(value)=>{
        if(value.target.name === 'userdata'){
            setInput(value.target.value);
    }
    else if(value.target.name === 'description'){
        setuserMsg(value.target.value);
    }
    else{
        setuserDate(value.target.value)
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
    console.log(userInput,usermsg,userDate);
    // setTask([...task,{'userinput':userInput,'usermsg':usermsg}]);
    if(id){
        const data={
            id:parseInt(id),
            usertitle:userInput,
            userdescription:usermsg,
            userbirthday:userDate,
        };
        setInput("");
        setuserMsg("");
        setuserDate("");
        dispatch({type:"update_task", payload : data});
        navigate('/Home')
    }
    else{
        const data={
            id:state.task.length+1,
            usertitle:userInput,
            userdescription:usermsg,
            userbirthday:userDate,
            defaultValue: false,
        };
        setInput("");
        setuserMsg("");
        setuserDate("");
    
        dispatch({type:"add_task", payload : [...state.task , data]});
    }
    // showing(arr);
}
// console.log(arr);
  return (
    <div>
        <div>
            <Link to='/Home'>Home</Link>
        </div>
        <div className='user-input'>
            <form>
                <input autoComplete='off' placeholder='Description' value={userInput} name='userdata' onChange={userData}/>
                <textarea name='description' value={usermsg} onChange={userData}/>
                <input type='date' name='date' value={userDate} onChange={userData}/>
                <button onClick={(value)=>userSubmit(value)}>Add</button>
            </form>
        </div>
        
    </div>
  )
}

export default Cart