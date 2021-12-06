import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'antd'
import Api from '../../services/Api'
import './index.css'

export default function EditNotes() {
  let {id} = useParams()
  const [editted, setEditted] = useState([])
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    Api.get(`/notes/${id}`)
      .then((res) => {
        setEditted(res.data.data[0])
      })
      .catch(err => console.log(err))
  }, [editted.id, id])

  useEffect(() => {
    reset({content: editted.content})
  }, [reset, editted])

  const submit = data => {
    Api.put(`/notes/${id}`, data)
      .then((res) => {
        navigate('/notes')
      })
      .catch(err => console.error(err))
  }

  function goBack(){
    navigate('/notes')
  }

  function deleteNote(){
    Api.delete(`/notes/${id}`)
      .then((res) => {
        console.log(res)
        navigate('/notes')
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='editNote'>
      <h2>Edit your note here</h2>
      <form onSubmit={handleSubmit(submit)}>
        <input type='text' className='editInput' name='note' {...register('content', { required: true })}/>
        <div className="Buttons">
          <Button type='primary' htmlType='submit' className='editButton'>Editar</Button>
          <Button type='default' onClick={() => {goBack()}} className='editButton'>Cancelar</Button>
          <Button type='link' onClick={() => {deleteNote()}} className='editButton exclude'>Deletar</Button>
        </div>
      </form>
    </div>
  )
}
