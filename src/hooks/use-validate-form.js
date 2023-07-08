import { useState } from "react";

function useValidateForm(validate) {
    const [value, setValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validate(value);
    const hasError = !valueIsValid && isTouched;

    function changeHandler(event) {
        setValue(event.target.value);
    }

    function clickSubmit() {
        setIsTouched(true);
    }

    function resetInput() {
        setValue("");
    }

    return {
        value,
        valueIsValid,
        hasError,
        changeHandler,
        clickSubmit,
        resetInput,
    };
}

export default useValidateForm;
