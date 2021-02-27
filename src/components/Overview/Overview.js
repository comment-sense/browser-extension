import React from 'react'
import { Button, Descriptions } from 'antd'

const Overview = ({ onAnalyze, isAnalyzed }) => {
  return (
    <Descriptions
      bordered
      title="Video Title"
      extra={
        !isAnalyzed ? (
          <Button type="primary" onClick={onAnalyze}>
            Analyze
          </Button>
        ) : null
      }
    >
      <Descriptions.Item label="Creator">Traversy Media</Descriptions.Item>
      <Descriptions.Item label="Video Length">1hr 30min</Descriptions.Item>
      <Descriptions.Item label="Uploaded At">'Today</Descriptions.Item>
      <Descriptions.Item label="Total Comments">6,398</Descriptions.Item>
      <Descriptions.Item label="Total Likes">1,361</Descriptions.Item>
      <Descriptions.Item label="Total Dislikes">25K</Descriptions.Item>
    </Descriptions>
  )
}

export default Overview
