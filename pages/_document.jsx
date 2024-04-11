
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo3.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Are You Ready to Beautify Your Server with a Lot of Commands?"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Viesta" />
          <meta name="twitter:creator" content="@Viesta" />
          <meta property="og:url" content="https://viestabot.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Viesta" />
          <link
            rel="icon"
            href="/img/logo3.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Are You Ready to Beautify Your Server with a Lot of Commands?"
          />
          <meta property="og:image" content="/img/logo3.jpg" />
          <meta property="og:image:alt" content="Viesta" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Viesta"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logo3.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
