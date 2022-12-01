import React from "react";
import SignupForm from "../../components/register/SignupForm"
import Layout from "./../../components/elements/GlobalLayout"
import Header from "../../components/elements/GlobalHeader2"

const Signup = () => {
    return (
        <>
        <Header />
        <Layout>
            <SignupForm />
        </Layout>
        </>
    );
};

export default Signup;
