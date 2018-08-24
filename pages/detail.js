import {connect} from 'react-redux'

const Detail = (props) => (
  <div className="row">
    {console.log(props, 'detail')}
  </div>
)


export default connect()(Detail)