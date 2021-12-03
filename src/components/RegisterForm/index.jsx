import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import Api from '../../services/Api'
import './index.css'

export default function RegisterForm() {
  const { register, handleSubmit } = useForm()

  const submit = data => {
    Api.post('/users', data)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }
  return (
    <div className='form'>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit(submit)}>
        <input type='text' name='username' {...register('username')} placeholder='Username'/>

        <input type='password' name='password' {...register('password')} placeholder='Password'/>

        <Button type='primary' htmlType='submit'>Cadastrar</Button>
      </form>
    </div>
  )
}
