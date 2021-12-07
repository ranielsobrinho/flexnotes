import React, { useState, useEffect } from 'react'
import { Card, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import Api from '../../services/Api'
import Loading from '../Loading'
import './index.css'

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    Api.get('/notes')
      .then((response) => {
        setNotes(response.data.data)
        setLoading(true)
      })
      .catch(err => console.error(err))
  }, [notes])

  function edit(id){
    navigate(`/edit/${id}`)
  }

  return (
    <div className='noteContainer'>
      {!loading && <Loading />}
      {notes
        .map((note) => {
          return(
            <div key={note.id} className='card'>
              <Card title={note.userId.username}
               className='cardContent'
               extra={<Button type='link' onClick={() => {edit(note.id)}}><EditOutlined /></Button>}
              >
                <p className='card-name'>{note.content}</p>
              </Card>
            </div>
          )
        })
      }
    </div>
  )
}
