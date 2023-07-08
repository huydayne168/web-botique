import React, { Fragment, useRef, useState } from "react";
import { Form } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";
import bannerImg from "../../images/banner1.jpg";
import useValidateForm from "../../hooks/use-validate-form";
const SignUpForm = () => {
    // function to check if input is empty
    function checkIsEmpty(value) {
        if (value.trim() !== "") return true;
        else return false;
    }

    // function to check email input:
    function checkEmail(value) {
        const isDuplicateEmail = JSON.parse(localStorage.getItem("users")).some(
            (user) => user.email === value.trim()
        );
        if (value.trim() !== "" && value.includes("@") && !isDuplicateEmail)
            return true;
        else return false;
    }

    // function to check password input:
    function checkPassword(value) {
        if (value.trim() !== "" && value.length >= 8) return true;
        else return false;
    }

    // Name Input variables
    const {
        value: nameValue,
        valueIsValid: nameValueIsValid,
        hasError: nameHasError,
        changeHandler: nameChangeHandler,
        clickSubmit: nameClickSubmit,
        resetInput: nameResetInput,
    } = useValidateForm(checkIsEmpty);

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

    // Phone Input variables
    const {
        value: phoneValue,
        valueIsValid: phoneValueIsValid,
        hasError: phoneHasError,
        changeHandler: phoneChangeHandler,
        clickSubmit: phoneClickSubmit,
        resetInput: phoneResetInput,
    } = useValidateForm(checkIsEmpty);

    // check all sign up form is valid?:
    const allFormIsValid =
        nameValueIsValid &&
        emailValueIsValid &&
        passValueIsValid &&
        phoneValueIsValid;

    //  function to handle submit form:
    function submitHandler(event) {
        nameClickSubmit();
        emailClickSubmit();
        passClickSubmit();
        phoneClickSubmit();
        if (!allFormIsValid) {
            event.preventDefault();
        }
    }

    // return Component JSX:
    return (
        <div className={styles["signup-form"]}>
            <img src={bannerImg} alt="banner" className={styles.banner} />
            <Form method="post">
                <h1>Sign Up</h1>
                <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Full Name"
                    onChange={nameChangeHandler}
                    value={nameValue}
                />
                {nameHasError && <p>Bạn cần điền tên đầy đủ!</p>}
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={emailChangeHandler}
                    value={emailValue}
                />
                {emailHasError && (
                    <p>Email không hợp lệ hoặc đã được sử dụng!</p>
                )}

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={passChangeHandler}
                    value={passValue}
                />
                {passHasError && (
                    <p>Mật không hợp lệ, mật khẩu tối thiểu có 8 kí tự!</p>
                )}

                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    onChange={phoneChangeHandler}
                    value={phoneValue}
                />
                {phoneHasError && <p>Số điện thoại không hợp lệ!</p>}

                <button onClick={submitHandler}>sign up</button>

                <div className={styles["to-login"]}>
                    Login? <Link to={"/sign-in"}>Click</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignUpForm;
