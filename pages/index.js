import React from 'react'
import Link from 'next/link'
import '../scss/style.scss'
const Card = () => (
  <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img src="https://usatftw.files.wordpress.com/2014/06/usp-nba_-los-angeles-lakers-at-sacramento-kings.jpg?w=1000&h=600&crop=1"/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">Add To Pocket</a>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    
    <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img src="http://i1.jpopasia.com/assets/1/21366-beatcrusaders-9n46.jpg"/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">Add To Pocket</a>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>

  <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img src="https://i.gyazo.com/af01c4b6cfa67f35cb44c50e86d9004f.png"/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">Add To Pocket</a>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    {/* <div className="pagination">
      <a href="#"> <i className="material-icons">arrow_back</i> </a>
      <a href="#"> <i className="material-icons">arrow_forward</i> </a>
    </div> */}
    <ul className="pagination">
    <li className="wave-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
    <li className="waves-effect"><a href="#!"><i className="material-icons">brightness_7</i></a></li>
    <li className="waves-effect"><a href="#!"><i className="material-icons">brightness_5</i></a></li>
    <li className="waves-effect"><a href="#!"><i className="material-icons">brightness_5</i></a></li>
    <li className="waves-effect"><a href="#!"><i className="material-icons">brightness_5</i></a></li>
    <li className="waves-effect"><a href="#!"><i className="material-icons">brightness_5</i></a></li>
    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
  </ul>
  </div>
)

const Home = () => (
  <div className="container">
    <h1>headlines</h1>
    <Card classname="card"/>
  </div>
)

export default Home
