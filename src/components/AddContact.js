import React,{useState} from 'react';
import uniqid from 'uniqid';

export default function AddContact(props) {
    const [formValue,setValue] = useState({name:"",email:""});
    const setName = e =>{
        setValue(existingSetValue => ({
            ...existingSetValue,name:e.target.value,
        }))
    } 
    const setEmail = e =>{
        setValue(existingSetValue => ({
            ...existingSetValue,email:e.target.value,
        }))
    } 

    const add = e =>{
        e.preventDefault();
        if(formValue.name === "" || formValue.email === ""){
            alert('Fill the empty data')
        }
        else{
            props.addContactData({id: uniqid(), ...formValue});
            setValue({name:"",email:""});
        }
        
    }
  return (
    <div className='ui main container'>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={add}> 
        <div className='field'>
            <label>Name</label>
            <input 
            type='text' 
            name='name' 
            placeholder='Name'
            value={formValue.name}
            onChange={ setName }
            ></input>
        </div>
        <div className='field'>
            <label>Email</label>
            <input 
            type='email' 
            name='email' 
            placeholder='Email'
            value={formValue.email}
            onChange={setEmail}
            ></input>
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  )
}