import React, { useState, useEffect } from 'react'

import Api from '../../services/Api'

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    Api.get('/notes')
      .then((response) => {
        setNotes(response.data.data)
      })
      .catch(err => console.error(err))
  }, [notes.id])

  return (
    <div>
      {notes
        .map((note) => {
          return(
            <div key={note.id}>
              <p>{note.content}</p>
              <p>{note.userId.username}</p>
            </div>
          )
        })
      }
    </div>
  )
}
