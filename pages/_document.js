import Document, { Head, Main, NextScript } from 'next/document'
 
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
         
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
        </body>
      </html>
    )
  }
}