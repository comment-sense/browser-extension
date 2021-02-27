import React from 'react'
import { Button, Descriptions } from 'antd'

const Overview = ({ onAnalyze, isAnalyzed }) => {
  return (
    <Descriptions
      bordered
      title="Video Title"
      extra={!isAnalyzed ? <Button onClick={onAnalyze}>Analyze</Button> : null}
    >
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">5556440123</Descriptions.Item>
      <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wanting Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  )
}

export default Overview
