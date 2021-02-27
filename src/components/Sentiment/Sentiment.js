import React from 'react'
import { Statistic, Card, Row, Col } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import styles from './sentiment.module.css'

const Sentiment = () => {
  return (
    <div className={styles.container}>
      <h1>Viewer Sentiment</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Positive"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Negative"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Sentiment.propTypes = {}

export default Sentiment
