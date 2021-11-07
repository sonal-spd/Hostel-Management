import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Leave from "../components/leave";

function leave() {
    return (
        <>
        <Head>
            <title>Hour - Leave Application</title>
        </Head>
        <Header/>
        <div className="py-10" style={{ minHeight: "70vh" }}>
            <Leave />
        </div>
        <Footer/>
        </>
    )
}

export default leave;