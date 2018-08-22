import '../scss/style.scss'
export default () => (
  <div className="container-pocket">
    <ul className="collection row">

      <div className="col m3">
        <li className="collection-item avatar">
          <img src="https://usatftw.files.wordpress.com/2014/06/usp-nba_-los-angeles-lakers-at-sacramento-kings.jpg?w=1000&h=600&crop=1" alt="" className="circle"/>
          <span className="title">Title</span>
          <p>First Line 
            Second Line
          </p>
          <a className="pocketread" href="#!"><i className="material-icons">chrome_reader_mode</i></a>
        </li>
      </div>

      <div className="col m3">
        <li className="collection-item avatar">
        <img src="https://usatftw.files.wordpress.com/2014/06/usp-nba_-los-angeles-lakers-at-sacramento-kings.jpg?w=1000&h=600&crop=1" alt="" className="circle"/>
          <span className="title">Title</span>
          <p>First Line 
            Second Line
          </p>
          <a className="pocketread" href="#!"><i className="material-icons">chrome_reader_mode</i></a>
        </li>
      </div>
      
      
    </ul>
  </div>
)