import React from "react";
import SignUpForm from "../components/SignUpComps/SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { json, redirect } from "react-router-dom";
const SignUp = () => {
    return (
        <div className="main">
            <SignUpForm />
        </div>
    );
};

export default SignUp;

export async function action({ request }) {
    const res = await request.formData();

    const userData = {
        fullName: res.get("full-name"),
        email: res.get("email"),
        password: res.get("password"),
        phone: res.get("phone"),
    };
    console.log(localStorage.getItem("users"));
    let userArr = JSON.parse(localStorage.getItem("users") || "[]");
    userArr.push(userData);

    localStorage.setItem("users", JSON.stringify(userArr));
    return redirect("/sign-in");
}
