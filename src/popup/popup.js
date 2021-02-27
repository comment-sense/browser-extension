import React, { useState } from 'react'
import { Switch, Card } from 'antd'
import 'antd/dist/antd.compact.min.css'
import styles from './popup.module.css'
import { Sentiment, Overview } from '../components'

const Summary = () => (
  <div>
    <h2>Comment Summary</h2>
    <div>
      <h3>Subheading 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div>
      <h3>Subheading 2</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea impedit
        maiores qui soluta. Dolores earum enim fugit harum, id incidunt modi
        non, porro quibusdam quisquam repudiandae vero.
      </p>
    </div>
  </div>
)
const Popup = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isSentimentDisabled, setIsSentimentDisabled] = useState(true)
  const [isSummaryDisabled, setIsSummaryDisabled] = useState(true)
  const [isAnalyzed, setAnalyzed] = useState(false)
  const tabList = [
    { key: 'overview', tab: 'Overview', disabled: false },
    { key: 'sentiment', tab: 'Sentiment', disabled: isSentimentDisabled },
    { key: 'summary', tab: 'Summary', disabled: isSummaryDisabled },
  ]

  const handleTabChange = key => {
    console.log(key)
    setActiveTab(key)
  }

  const toggleDisability = () => {
    setIsSentimentDisabled(!isSentimentDisabled)
    setIsSummaryDisabled(!isSummaryDisabled)
    setTimeout(() => {
      setAnalyzed(true)
    }, 1000)
  }

  const handleDarkMode = checked => console.log(checked)
  const contentList = {
    overview: <Overview onAnalyze={toggleDisability} isAnalyzed={isAnalyzed} />,
    sentiment: <Sentiment />,
    summary: <Summary />,
  }

  return (
    <Card
      style={{ width: 450, minHeight: 320 }}
      headStyle={{ backgroundColor: '#F8FAFC' }}
      bordered={false}
      title="Comment Sense"
      extra={
        <div className={styles.darkmode}>
          <span>Dark Mode</span>
          <Switch onChange={handleDarkMode} />
        </div>
      }
      tabList={tabList}
      tabProps={{ type: 'card' }}
      activeTabKey={activeTab}
      defaultActiveTabKey={activeTab}
      onTabChange={handleTabChange}
      loading={false}
    >
      {contentList[activeTab]}
    </Card>
  )
}

export default Popup
