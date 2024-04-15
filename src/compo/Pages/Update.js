import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Update() {

    const {register, handleSubmit, setValue} = useForm(); 
    
    const {userId} =useParams()

    const navi = useNavigate();

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
        // alert('data added')
        navi('/show')
    }

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setValue('roll', result.data.roll)
        setValue('name', result.data.name)
      }
    
      useEffect(()=>{
        fetchData();
      }, [])

  return (
    <center>
        <div>
            <form onSubmit={handleSubmit(saveData)}>
                <label htmlFor='r'> ROLL:</label>
                <input type='number' id='r' {...register('roll')}/>
                <br/>
                <label htmlFor='n'> Name:</label>
                <input type='text' id='n'{...register('name')}/>
                <br/>
                <button type='submit'>Add User</button>
                <button type='reset'> RESET</button>
            </form>
    </div>
    </center>
  )
}

export default Update