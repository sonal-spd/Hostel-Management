import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Login from "../components/login";
import WebLayout from "../components/weblayout";


const Home = () => {
  return (
    <>
      <Head>
        <title>Hour</title>
      </Head>
      <Header/>
      <div className="py-10" style={{ minHeight: "70vh" }}>
        <Login />
      </div>
     <Footer/>
    </>
  );
};

Home.Layout = WebLayout;

export default Home;
