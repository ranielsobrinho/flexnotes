import React from 'react'
import { Layout, Button, Modal, message } from 'antd'
import { LogoutOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { BookOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import NoteForm from '../NoteForm'
import './index.css'


export default function HeaderComponent() {
  const { Header } = Layout
  const navigate = useNavigate()

  function info() {
    Modal.info({
      title: 'Clique no OK para fechar',
      content: (
        <div>
          <NoteForm />
        </div>
      ),
      onOk() {
        message.info('Dados enviados.')
      },
    });
  }

  function getOut(){
    sessionStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div>
      <Header className='loginHeader'>
        <p className="headerTitle">FlexNotes<BookOutlined /></p>
        <div className='headerButtons'>
          <Button onClick={info} type='primary'><PlusCircleOutlined />Add Note</Button>
          <Button type='link' onClick={() => {getOut()}}><LogoutOutlined />Sair</Button>
        </div>
      </Header>
    </div>
  )
}
