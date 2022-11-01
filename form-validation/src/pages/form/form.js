import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './form.css';
import userdata from './userdata.json'
const Form = () => {
    const navigate = useNavigate();
    // const storage= useEffect();
    const [userName, setuserName] = useState('manikandan');
    const [userPassword, setuserPassword] = useState('');
    const [errMsg,seterrMsg]= useState('invalid');
    // console.log(userName);
    const userInput=(value)=>{
        console.log(value);
        if(value.target.value === ""){
            seterrMsg("Invalid Data")
        }
        else{
            seterrMsg("");
        }
        if(value.target.name === 'username'){
            setuserName(value.target.value);
        }
        else{
            setuserPassword(value.target.value);
        }
    }
    // const userPwd=(value)=>{
    //     console.log(value);
    //     setuserPassword(value.target.value);
    // }
    const userSubmit=(value)=>{

        let getName=userdata.map((index)=>{
            return index.userName
        });
        let getPwd=userdata.map((index)=>{
            return index.password
        })

        let checkName=getName.indexOf(userName);

        let checkPwd=getPwd.indexOf(userPassword);

        value.preventDefault();

        if(userName === "" && userPassword === ""){
            seterrMsg('');
            return;
        }
        seterrMsg('')
        if(userName === getName[checkName] && userPassword === getPwd[checkPwd]){
            navigate('Home');
            // storage(()=>{
            //     localStorage.setItem("userName",JSON.stringify(userName))
            // },[userName])
            // sessionStorage.setItem("username", userName);
            // sessionStorage.setItem("userpwd",userPassword);
        }
    }
  return (
    <div >
        <div className='form-sec'>
            <h3>login</h3>
            <form>
                <div>
                    <input name='username' placeholder='UserName' onChange={userInput}/>
                </div>
                <div>
                    <input name='userpwd' placeholder='Password' onChange={userInput}/>
                </div>
                <button onClick={(value)=>userSubmit(value)}>login</button>
            </form>
        <h4>{errMsg}</h4>

        </div>
    </div>
  )
}


export default Form