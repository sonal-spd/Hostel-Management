import Head from "next/head";
import Attendance from "../components/attend";
import Footer from "../components/footer";
import Header from "../components/header";

function attendance() {
    return (
        <>
        <Head>
            <title>Hour - Attendance</title>
        </Head>
        <Header/>
        <div className="py-10" style={{ minHeight: "70vh" }}>
            <Attendance/>
        </div>
        <Footer/>
        </>
    )
}

export default attendance;
