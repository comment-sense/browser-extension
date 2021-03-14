import React from 'react'
import { Button, Descriptions } from 'antd'

const Overview = ({ onAnalyze, isAnalyzed, videoId }) => {
  const { Item } = Descriptions
  return (
    <Descriptions
      bordered
      title={`Video ID: ${videoId}`}
      extra={
        !isAnalyzed ? (
          <Button type="primary" onClick={onAnalyze}>
            Analyze
          </Button>
        ) : null
      }
    >
      <Item label="Creator">Traversy Media</Item>
      <Item label="Video Length">1hr 30min</Item>
      <Item label="Uploaded At">'Today</Item>
      <Item label="Total Comments">6,398</Item>
      <Item label="Total Likes">1,361</Item>
      <Item label="Total Dislikes">25K</Item>
    </Descriptions>
  )
}

export default Overview
