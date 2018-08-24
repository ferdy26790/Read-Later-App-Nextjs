import '../scss/style.scss'
import { connect } from 'react-redux'
import Link from 'next/link'
const formatDate = (dateFormat) => {
  const newFormated = new Date(dateFormat)
  return newFormated.toString()
}

const PocketList = (props) => (
  
    <div className="col m3">
      <li className="collection-item avatar">
        <img className="circle" src={props.pocketNews.urlToImage}/>
        <span className="title">{props.pocketNews.title.split(',')[0]}</span>
        <p>{props.pocketNews.description.substring(0,40)+'...'}
        </p>
        <br/>
        <p>source: <strong>{props.pocketNews.source.name}</strong></p>
        <p>published: <i>{formatDate(props.pocketNews.publishedAt)}</i></p>
        <Link as={`/detail/${props.pocketNews.id}`} href={`/detail?title=${props.pocketNews.id}`}>
          <a className="pocketread"><i className="material-icons">chrome_reader_mode</i></a>
        </Link>
        <a className="pocketread" onClick={() => props.removeFromPocket({type: 'DELETE_FROM_POCKET', payload: props.pocketNews})}><i className="material-icons">delete_forever</i></a>
      </li>
    </div>
 
)

const Pocket = (props) => (
  <div className="container-pocket">
  <h1>My Pocket List</h1>
  {console.log(props)}
  <ul className="collection row">
    {props.pocket.length <= 0 ? <h1>No Pocket List</h1> : 
      props.pocket.map((pocketNews) => {
        return (<PocketList key={pocketNews.id} pocketNews={pocketNews} removeFromPocket={props.dispatch}/>)
      })
    }
     </ul>
  </div>
)

export default connect(state => state)(Pocket)