import React from 'react'
import { Tabs } from 'antd'

import LoginHeader from '../../components/LoginHeader'
import Notes from '../../components/Notes'
import UserNotes from '../../components/UserNotes'
import './index.css'

export default function NotesPage() {
  const { TabPane } = Tabs

  return (
    <div>
      <LoginHeader />
      <div className='tabs'>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Todas as anotações' key='1'>
            <Notes />
          </TabPane>
          <TabPane tab='Suas anotações' key='2'>
            <UserNotes />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
