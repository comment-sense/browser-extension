import React from 'react'
import { Button, DatePicker, version } from 'antd'
import 'antd/dist/antd.css'
import styles from './popup.module.css'

const Popup = () => {
  return (
    <div className={styles.container}>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Analyze Comments!
      </Button>
    </div>
  )
}

export default Popup
