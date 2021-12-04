import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/globals.scss";
import Layout from "../components/layout";
import { useState } from "react";
import Loading from "../components/loading";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(0);
  let time = router.route == '/' ? 3000 : 0;
  setTimeout(() => {
    setLoading(1);
  }, time);

  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // once: true,
      // offset: 50,
      duration:"1500"
    });
  }, []);
  //
  return loading == 0 ? (
    <Loading />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
