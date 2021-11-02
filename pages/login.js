import Head from "next/head";
import Login from "../components/login";

function login() {
    return (
        <>
        <Head>
            <title>Hour</title>
        </Head>
        <div className="py-10" style={{ minHeight: "70vh" }}>
            <Login />
        </div>
        </>
    )
}

export default login
