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
        <meta property="og:image" content="https://res.cloudinary.com/nemo-frenkel/image/upload/v1656175273/whats4dinner_vqvshi.png" />
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
