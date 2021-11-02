import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import WebLayout from "../components/weblayout";
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

Home.Layout = WebLayout;

export default Home;
