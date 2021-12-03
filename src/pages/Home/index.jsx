import React, { useState } from 'react'
import { Button } from 'antd'

import HeaderComponent from '../../components/Header'
import SignForm from '../../components/SignForm'
import RegisterForm from '../../components/RegisterForm'
import './index.css'

export default function Home() {
  const [login, setLogin] = useState(true)

  function toggleLogin(){
    setLogin(!login)
  }

  return (
    <div className='homeContainer'>
      <HeaderComponent />
      <div className="content">
        { login ?
          <>
            <SignForm/>
            <div className='toggle'>
              <p>Não tem uma conta?</p>
              <Button type='link' onClick={() => {toggleLogin()}}>Faça a sua agora.</Button>
            </div>
          </>
        :
          <>
            <RegisterForm />
            <div className='toggle'>
              <p>Já tem conta?</p>
              <Button type='link' onClick={() => {toggleLogin()}}>Faça seu login.</Button>
            </div>
          </>
        }
      </div>
    </div>
  )
}
