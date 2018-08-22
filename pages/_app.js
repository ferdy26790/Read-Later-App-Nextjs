import App, {Container} from 'next/app'
import Head from '../components/head'
import Nav from '../components/nav'

const Layout = () => {
  return(<div>
    <Head/>
    <Nav/>    
  </div>)
}

export default class myApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return(<Container>
        <Layout/>
        <Component {...pageProps}/>
    </Container>)
  }
}
