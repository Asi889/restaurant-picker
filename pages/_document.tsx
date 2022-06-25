import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Favicon from '../components/Favicon';
import { GoogleAnalytics } from '../components/layout/GoogleAnalytics';


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html dir="rtl" lang="he">
        <Head>
          <GoogleAnalytics />
          <Favicon />
        </Head>
        <body>

          <Main />
          <NextScript />
         
        </body>
      </Html>
    );
  }
}

export default MyDocument;
