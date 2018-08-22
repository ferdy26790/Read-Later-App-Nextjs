import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import '../scss/style.scss'
const Card = (props) => (
  <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img src={props.news.urlToImage}/>
          <span className="card-title">{props.news.title}</span>
        </div>
        <div className="card-content">
          <p>{props.news.description}</p>
        </div>
        <div className="card-action">
          <a href="#">Add To Pocket</a>
          <a href={props.news.url}>Read More</a>
        </div>
      </div>
    </div>
  </div>
)

const Index = (props) => (
  <div className="container">
    <h1>headlines</h1>
    {console.log(props.data)}
    {props.data.map(news => (
      <Card className="card" key={news.source.id} news={news}/>
    ))}
  </div>
)

Index.getInitialProps = async () => {
  const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1bca106cc3d84b92ac87c437194ab5e6')
  res.data.articles.map((news, idx) => news.source.id = idx+1 )
  return {data : res.data.articles}
}

export default Index
