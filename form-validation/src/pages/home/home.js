import React, { useContext } from 'react'
import { useNavigate , Link, createSearchParams } from 'react-router-dom';
import { stateCondex } from '../context/contex';
import './home.css'
const Home = () => {
  const {state,dispatch}= useContext(stateCondex);
  console.log(state);
  const navigate= useNavigate();
  function cartPage(){
    navigate('/Cart')
  }
  const defaultValueChange=(id)=>{
    dispatch({type:'default_change', payload: id})
  }
  const deleteItems=(id)=>{
    console.log(id);
    dispatch({type:'del_task', payload: id})
  }
  const editIteams=(id)=>{
    // const id=id;
    navigate({
      pathname:'/Cart',
      search: createSearchParams({
        id : id
      }).toString()
    })
  }
  return (
    <div>
      <div className='header'>
      <div className='home-page'>
        <div>
          <Link className='home-link' to="/Home">Home</Link>
        </div>
        <div>
          <button onClick={()=>cartPage()}>Add</button>
        </div> 
      </div>
      </div>
      <div className='input-show'>
      {state.task?.map((iteam,index)=>{
          return(
            <div>
            <h3>{iteam.usertitle}</h3>
            <h4>{iteam.userbirthday}</h4>
            <p>{iteam.userdescription}</p>

            <input type='checkbox' checked={iteam.defaultValue} onChange={()=>defaultValueChange(iteam.id)}/>
            <button onClick={()=>deleteItems(iteam.id)}>Delete</button>
            <button onClick={()=>editIteams(iteam.id)}>Edit</button>
            </div>
            )
          
        })}
      </div>
    </div>
  )
}

export default Home;