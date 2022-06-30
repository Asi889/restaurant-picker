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
          <meta property="og:image:secure_url" itemProp='image' content="https://res.cloudinary.com/nemo-frenkel/image/upload/v1656311538/whats4dinner_sw5jnz.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta property="og:image" content="https://res.cloudinary.com/nemo-frenkel/image/upload/v1656569914/whats4dinner-whatsapp_yocd1t.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />

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
