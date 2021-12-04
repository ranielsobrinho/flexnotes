import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
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
        navigate('/notes')
      })
      .catch((err) => {
        setError('Senha ou usuário inválidos. Tente outra vez ou cadastre-se.')
      })
  }
  return (
    <div className='form'>
      <h2>Entrar</h2>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit(submit)}>
        <input type='text' name='username' {...register('username')} placeholder='Username'/>

        <input type='password' name='password' {...register('password')} placeholder='Password'/>

        <Button type='primary' htmlType='submit'>Entrar</Button>
      </form>
    </div>
  )
}
