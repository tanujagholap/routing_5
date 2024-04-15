import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {

    const {register, handleSubmit} = useForm(); 

    const navi = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users', data)
        // alert('data added')
        navi('/show')
    }

  return (
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
  )
}

export default Add