
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Notice from "../components/Notice";

const Home = () => {
  return (
    <>
      <Head>
        <title>Hour</title>
      </Head>
      <Header/>
      <Notice/>
     <Footer/>
    </>
  );
};


export default Home;