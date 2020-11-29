import {useMemo, useState} from "react";

const useLoginState = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [showEmailError, setShowEmailError] = useState(false);

  const emailError = useMemo(() => !/^[^@]+@[^@]+\.[^@]+$/i.test(email), [email]);

  const onEmailChange = (value) => {
    setShowEmailError(false);
    setEmail(value);
  };

  const validateEmail = () => {
    setShowEmailError(true);

    return !emailError;
  };

  return {
    email,
    emailError: showEmailError && emailError,
    password,
    onEmailChange,
    onPasswordChange: setPassword,
    validateEmail
  };
};

export default useLoginState;
