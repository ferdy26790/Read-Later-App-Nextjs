import { connect } from 'react-redux'
import Link from 'next/link'
import '../scss/style.scss'
const Card = (props) => (
  <div className="row">
    <div className="col s12 m12">
      <div className="card medium">
        <div className="card-image">
          <img src={props.news.urlToImage ? props.news.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"}/>
          <span className="card-title">{props.news.title}</span>
        </div>
        <div className="card-content">
          <p>{props.news.description}</p>
        </div>
        <div className="card-action">
          <a onClick={() => props.dispatch({type: 'ADD_TO_POCKET', payload: props.news})}>Add To Pocket</a>
          {/* <Link href={`/detail?title=${props.news.title}`}>
            <a>Read More</a>
          </Link> */}
        </div>
      </div>
    </div>
  </div>
)
export default connect()(Card)