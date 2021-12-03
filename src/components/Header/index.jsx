import React from 'react'
import { Layout } from 'antd'
import { BookOutlined } from '@ant-design/icons'
import './index.css'


export default function HeaderComponent() {
  const { Header } = Layout
  return (
    <div>
      <Header>
        <p className="headerTitle">FlexNotes<BookOutlined /></p>
      </Header>
    </div>
  )
}
