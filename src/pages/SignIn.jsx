import React from "react";
import SignInForm from "../components/LoginComps/SignInForm";
import { redirect } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="main">
            <SignInForm />
        </div>
    );
};

export default SignIn;

export async function action({ request }) {
    const res = await request.formData();

    const data = {
        email: res.get("email"),
        password: res.get("password"),
    };
    return redirect("/");
}
