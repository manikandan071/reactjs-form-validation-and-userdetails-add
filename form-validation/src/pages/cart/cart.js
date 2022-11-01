import React, { useState } from 'react'

const Cart = () => {
    let arr = [];
    const [userInput ,setInput]=useState('');
    const [usermsg , setuserMsg] = useState('');
    const userData=(value)=>{
        if(value.target.name === 'userdata'){
            setInput(value.target.value);
    }
    else{
        setuserMsg(value.target.value);
    }
}
let display=document.getElementById('display');
function showing(items){
    items.forEach(data => {
        let h=document.createElement("h3");
        h.innerText=data.userinput;
        display.append(h);
        let pera=document.createElement('p');
        pera.innerText=data.usermsg;
        display.append(pera);
    });
}
const userSubmit=(value)=>{
        value.preventDefault();
    console.log(userInput,usermsg);
    arr.push({'userinput':userInput,'usermsg':usermsg})
    showing(arr);
}
console.log(arr);
  return (
    <div>
        <div>
            <h4>Logo</h4>
        </div>
        <div>
            <form>
                <input name='userdata' onChange={userData}/>
                <textarea name='description' onChange={userData}/>
                <button onClick={(value)=>userSubmit(value)}>add</button>
            </form>
        </div>
        <div id='display'></div>
    </div>
  )
}

export default Cart