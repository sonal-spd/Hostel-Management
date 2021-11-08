
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Profile from "../components/profile";

function leave() {
    return (
        <>
        <Head>
            <title>User Profile</title>
        </Head>
        <Header/>
        <div className="py-10" style={{ minHeight: "70vh" }}>
            <Profile />
        </div>
        <Footer/>
        </>
    )
}

export default leave;