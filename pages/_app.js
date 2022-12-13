import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import Footer from "../components/footer/Footer";
import "../styles/globals.css";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
