import '../styles/globals.css';
import Layout from '../components/Layout';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-03M66NMF9K"
        strategy="afterInteractive"
      />

      <Script id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-03M66NMF9K', {
            anonymize_ip: true
          });
        `}
      </Script>

      <Component {...pageProps} />
    </Layout>
  );
}