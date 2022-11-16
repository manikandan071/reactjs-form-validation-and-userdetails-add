import React, { useContext, useState } from 'react'
import './cart.css'
import { stateCondex } from '../context/contex';
import { TextField } from '@material-ui/core';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


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
    const [select , setSelect] = useState(state.task[getid]?.selected || false)
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

const userSelect=()=>{
    return(
        setSelect(!select)
    )
}

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
            defaultValue: false,
            selected:select
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
            selected:select
        };
        setInput("");
        setuserMsg("");
        setuserDate("");
        setSelect(false)
    
        dispatch({type:"add_task", payload : [...state.task , data]});
    }
    // showing(arr);
}
// console.log(arr);
  return (
    <div className='cart-sec'>
        <div>
            <Link to='/Home'>Home</Link>
        </div>
        <div className='user-input'>
            <form>
                <TextField className='input-sec' autoComplete='off' placeholder='Title' value={userInput} name='userdata' onChange={userData}/>
                <TextField className='input-sec' id="standard-textarea" multiline name='description' placeholder='Description' value={usermsg} onChange={userData}/>
                <TextField className='input-sec' id='date' type='date' name='date' value={userDate} onChange={userData}/>
                {/* <input type='checkbox' placeholder='priority' checked={select} onChange={()=>userSelect()}/> */}
                <FormControlLabel control={<Checkbox checked={select} onChange={()=>userSelect()}  name="checkedA" />}label="priority"/>
                <Button variant="contained" color="primary" onClick={(value)=>userSubmit(value)}>Add</Button>
            </form>
        </div>
        
    </div>
  )
}

export default Cart