import Head from "next/head";
import AboutContent from "../components/about";
import Footer from "../components/footer";
import Header from "../components/header";


const About = () => {
  return (
    <>
      <Head>
        <title>Hour - About</title>
      </Head>
      <Header/>
      
        <AboutContent/>
      
     <Footer/>
    </>
  );
};

export default About;
