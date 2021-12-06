import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Alert } from 'antd'
import Api from '../../services/Api'
import './index.css'

export default function SignForm() {
  const { register, handleSubmit } = useForm()
  const [ error, setError ] = useState('')
  const navigate = useNavigate()

  const submit = data => {
    Api.post('/auth', data)
      .then((res) => {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('userId', res.data.userId)
        navigate('/notes')
      })
      .catch((err) => {
        setError('Senha ou usuário inválidos. Tente outra vez ou cadastre-se.')
      })
  }
  return (
    <div className='form'>
      {error && <Alert message={error} type='error' />}
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit(submit)}>
        <input type='text' name='username' {...register('username', {required: true})} placeholder='Username' />

        <input type='password' name='password' {...register('password', {required: true})} placeholder='Password' />

        <Button type='primary' htmlType='submit'>Entrar</Button>
      </form>
    </div>
  )
}
