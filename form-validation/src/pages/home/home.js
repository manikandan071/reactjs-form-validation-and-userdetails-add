import React, { useContext } from 'react'
import { useNavigate , Link, createSearchParams } from 'react-router-dom';
import { stateCondex } from '../context/contex';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import { DataGrid } from '@mui/x-data-grid';
import './home.css'

const Home = () => {
  const {state,dispatch}= useContext(stateCondex);
  console.log(state);
  const navigate= useNavigate();
  function cartPage(){
    navigate('/Cart')
  }
  function filterContentAsd(){
    const sort=state.task.sort((a,b)=> a.usertitle.localeCompare(b.usertitle));
    console.log(sort);
    dispatch({type:"sort_ascend" , payload: sort})
  }
  function filterContentDsd(){
    const sort=state.task.sort((a,b)=> b.usertitle.localeCompare(a.usertitle));
    console.log(sort);
    dispatch({type:"sort_descend" , payload: sort})
  }
  function filterSelected(){
    const selected=state.task.filter((item)=> item.selected === true);
    console.log(selected);
    dispatch({type:"filter_selected" , payload:selected})
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
          <Button variant="contained" color="primary" onClick={()=>cartPage()} >Add</Button>
          <Button variant="contained" color="primary" onClick={()=>filterContentAsd()} >Ascend</Button>
          <Button variant="contained" color="primary" onClick={()=>filterContentDsd()} >Descend</Button>
          <Button variant="contained" color="primary" onClick={()=>filterSelected()} >fillter</Button>
        </div> 
      </div>
      </div>
      <div className='input-show'>
      {state.task?.map((iteam,index)=>{
          return(
            <div className='card-sec' key={index}>
            {/* <h3>{iteam.usertitle}</h3>
            <p>{iteam.userdescription}</p>
            <h4>{iteam.userbirthday}</h4>
            <input type='checkbox' checked={iteam.defaultValue} onChange={()=>defaultValueChange(iteam.id)}/>
            <button onClick={()=>deleteItems(iteam.id)}>Delete</button>
            <button onClick={()=>editIteams(iteam.id)}>Edit</button> */}

            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h4'>{iteam.usertitle}</Typography>
                <Typography variant='p'>{iteam.userdescription}</Typography>
                <Typography variant='h6'>{iteam.userbirthday}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={()=>deleteItems(iteam.id)}>Delete</Button>
                <Button onClick={()=>editIteams(iteam.id)}>Edit</Button>
                <input type='checkbox' checked={iteam.defaultValue} onChange={()=>defaultValueChange(iteam.id)}/>
                <input disabled type='checkbox' checked={iteam.selected}/>
              </CardActions>
            </Card>

            </div>
            )
          
        })}
      </div>

    </div>
  )
}

export default Home;