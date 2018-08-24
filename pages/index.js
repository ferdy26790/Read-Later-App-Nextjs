import React from 'react'
import Link from 'next/link'
import {connect} from 'react-redux'
import '../scss/style.scss'
import Card from '../components/card'

const Index = (props) => (
  <div className="container">
    <h1>headlines</h1>
    {props.news.length <= 0 ? <i className="spiner fa fa-spinner fa-spin"></i> : props.news.map(news => (
      <Card className="card" key={news.title} news={news}/>
    ))}
    <style jsx>
    {
      `.spiner {
          font-size: 100px
      }`
    }
    </style>
  </div>
)

export default connect(state => state)(Index)
