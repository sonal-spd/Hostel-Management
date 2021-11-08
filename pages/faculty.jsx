


import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Faculty from "../components/faculty";

function leave() {
    return (
        <>
        <Head>
            <title>Hour - Faculty</title>
        </Head>
        <Header/>
        <div className="py-10" style={{ minHeight: "70vh" }}>
            <Faculty />
        </div>
        <Footer/>
        </>
    )
}

export default leave;