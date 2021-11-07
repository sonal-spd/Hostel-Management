import Head from "next/head";
import Complain from "../components/complain";
import Footer from "../components/footer";
import Header from "../components/header";

function complain() {
    return (
        <>
        <Head>
            <title>Hour - Complaint Forum</title>
        </Head>
        <Header/>
        <div className="py-10" style={{ minHeight: "70vh" }}>
            <Complain/>
        </div>
        <Footer/>
        </>
    )
}

export default complain;
