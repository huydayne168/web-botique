import React, { Fragment } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import styles from "./SignInForm.module.css";
import { Link } from "react-router-dom";
import bannerImg from "../../images/banner1.jpg";
import useValidateForm from "../../hooks/use-validate-form";
import { curUserActions } from "../../store";
import { useDispatch } from "react-redux";
const SignInForm = () => {
    const userData = useActionData();
    const navigate = useNavigate();
    console.log(userData);
    const userArr = JSON.parse(localStorage.getItem("users"));
    const actions = curUserActions;
    const dispatch = useDispatch();
    function submitHandler(event) {
        emailClickSubmit();
        passClickSubmit();
        if (!isValid) {
            event.preventDefault();
            passResetInput();
        } else {
            dispatch(actions.login(emailValue));
        }
    }

    function checkEmail(value) {
        if (
            value.trim() !== "" &&
            userArr.some((user) => user.email === value)
        ) {
            return true;
        } else return false;
    }

    function checkPassword(value) {
        const curEmail = userArr?.filter((user) => user.email === emailValue);
        console.log(value);
        if (value === curEmail[0]?.password) {
            return true;
        } else return false;
    }

    // Email Input variables
    const {
        value: emailValue,
        valueIsValid: emailValueIsValid,
        hasError: emailHasError,
        changeHandler: emailChangeHandler,
        clickSubmit: emailClickSubmit,
        resetInput: emailResetInput,
    } = useValidateForm(checkEmail);
    // Password Input variables
    const {
        value: passValue,
        valueIsValid: passValueIsValid,
        hasError: passHasError,
        changeHandler: passChangeHandler,
        clickSubmit: passClickSubmit,
        resetInput: passResetInput,
    } = useValidateForm(checkPassword);

    // check all is valid:
    const isValid = emailValueIsValid && passValueIsValid;

    return (
        <div className={styles["signin-form"]}>
            <img src={bannerImg} alt="banner" className={styles.banner} />
            <Form method="post">
                <h1>Sign In</h1>

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                />
                {emailValue.trim() === "" && emailHasError && (
                    <p>Yêu cầu nhập email!</p>
                )}
                {emailValue.trim() !== "" && emailHasError && (
                    <p>Email chưa được đăng kí!</p>
                )}

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={passValue}
                    onChange={passChangeHandler}
                />
                {passValue.trim() === "" && passHasError && (
                    <p>Password không chính xác!!!</p>
                )}

                <button type="submit" onClick={submitHandler}>
                    Login
                </button>

                <div className={styles["to-login"]}>
                    Create an account? <Link to={"/sign-up"}>Sign up</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignInForm;
