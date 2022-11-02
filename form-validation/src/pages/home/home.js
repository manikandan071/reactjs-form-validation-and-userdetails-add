import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { stateCondex } from '../context/contex';
const Home = () => {
  const {state,dispatch}= useContext(stateCondex);
  console.log(state);
  const navigate= useNavigate();
  function cartPage(){
    navigate('/Cart')
  }
  return (
    <div>
      <div>
        <h3>Logo</h3>
      </div>
      <div>
        <button onClick={()=>cartPage()}>Add</button>
      </div>
        {state.task?.map((iteam,index)=>{
          return(
            <div>
            <h3 key={index}>{iteam.userInput}</h3>
            <p key={index}>{iteam.usermsg}</p>
            </div>
            )
          
        })}
    </div>
  )
}

export default Home;