import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
// import Api from '../../services/Api'
import './index.css'

export default function EditNotes() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const submit = data => {
    console.log(data)
  }

  function goBack(){
    navigate('/notes')
  }

  return (
    <div className='editNote'>
      <h2>Edit your note here</h2>
      <form onSubmit={handleSubmit(submit)}>
        <input type='text' name='note' {...register('note')} />
        <div className="editButtons">
          <Button type='primary' htmlType='submit'>Editar</Button>
          <Button type='default' onClick={() => {goBack()}}>Cancelar</Button>
        </div>
      </form>
    </div>
  )
}
