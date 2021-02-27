import React, { useState } from 'react'
import { Switch, Card } from 'antd'
import 'antd/dist/antd.compact.min.css'
import styles from './popup.module.css'
import { Sentiment, Overview, Summary } from '../components'
import brandURI from '../icons/logo@48x48.png'

const Popup = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isSentimentDisabled, setIsSentimentDisabled] = useState(true)
  const [isSummaryDisabled, setIsSummaryDisabled] = useState(true)
  const [isAnalyzed, setAnalyzed] = useState(false)

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

  const tabList = [
    { key: 'overview', tab: 'Overview', disabled: false },
    { key: 'sentiment', tab: 'Sentiment', disabled: isSentimentDisabled },
    { key: 'summary', tab: 'Summary', disabled: isSummaryDisabled },
  ]

  const contentList = {
    overview: <Overview onAnalyze={toggleDisability} isAnalyzed={isAnalyzed} />,
    sentiment: <Sentiment />,
    summary: <Summary />,
  }

  const Brand = () => (
    <div className={styles.brand}>
      <div>
        <img src={brandURI} alt="logo" />
      </div>
      <h2 className={styles.companyName}>Comment Sense</h2>
    </div>
  )

  const ToggleDarkMode = () => (
    <div className={styles.darkMode}>
      <span>Dark Mode</span>
      <Switch onChange={handleDarkMode} />
    </div>
  )

  return (
    <Card
      style={{ width: 450, minHeight: 320 }}
      headStyle={{ backgroundColor: '#F8FAFC' }}
      bordered={false}
      title={<Brand />}
      extra={<ToggleDarkMode />}
      tabList={tabList}
      tabProps={{ type: 'card', size: 'small' }}
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
