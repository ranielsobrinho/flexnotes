import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, message } from 'antd'
import './index.css'
import Api from '../../services/Api'

export default function NoteForm() {
  const { register, handleSubmit } = useForm()
  const submit = data => {
    Api.post('/notes', {
      content: data.content,
      userId: sessionStorage.getItem('userId')
    })
      .then((res) => {
        message.success('Nova nota salva com sucesso')
      })
      .catch(err => {
        message.error('Houve algum problema.')
      })
  }

  return (
    <div className='noteFormContainer'>
      <form onSubmit={handleSubmit(submit)} className='noteForm'>
        <input type='text' name='content' {...register('content', {required: true})} placeholder='Digite uma nota nova'/>
        <Button type='primary' htmlType='submit'>Add</Button>
      </form>
    </div>
  )
}
