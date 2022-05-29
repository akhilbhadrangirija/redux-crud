import './App.css'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {addUser,deleteUser,updateUser} from './features/user'

const Card = styled.div`
width:450px;
height:250px;
background-color:aliceblue;
display:flex;
justify-content:center;
flex-direction:column;
margin:15px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius:20px;

`;


function App() {

  const [name,setName]=useState('');
  const [username,setUsername]=useState('');
  const [newUsername,setNewusername]=useState('')


  const userdata = useSelector((state)=>state.user.value)

  const dispatch = useDispatch();
  
  const createUser =()=>{
  dispatch((addUser({id:userdata.length+1,name,username})))
  setName('')
  setUsername('')

  }



  return (
    <div className="main">
     <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" type="text" />
    <input  value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" type="text" />
    <button onClick={createUser}>Add user</button>


    <div className="App">
   
     {userdata.map((user)=>{
       return(
        <Card key={user.id}>
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
      <div>
        <input onChange={(e)=>setNewusername(e.target.value)} type="text" />
        <button onClick={()=>dispatch((updateUser({id:user.id,username:newUsername})))}>Update Username</button>
        <button onClick={()=>dispatch((deleteUser({id:user.id})))}>Delete User</button>
      </div>
     </Card>

       )
     })}
    

    </div>


    </div>
  );
}

export default App;
