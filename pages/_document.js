import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://unpkg.com/aos@next/dist/aos.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
