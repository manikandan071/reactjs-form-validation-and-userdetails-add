import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
    </div>
  )
}

export default Home;