import React, { useContext, useEffect, useState } from "react";
import { FiUser, FiKey, FiMail } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import { registerStrings } from "../utils/strings";

const RegisterInput = ({ register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { locale } = useContext(LocaleContext);

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [password, confirmPassword]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!isError) {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <label className="form__field">
        <div className="form__icon">
          <FiUser size="100%" />
        </div>
        <input
          type="text"
          className="form__input"
          placeholder={registerStrings[locale].name}
          value={name}
          onChange={onNameChangeHandler}
        />
      </label>
      <label className="form__field">
        <div className="form__icon">
          <FiMail size="100%" />
        </div>
        <input
          type="email"
          className="form__input"
          placeholder="Email"
          value={email}
          onChange={onEmailChangeHandler}
        />
      </label>
      <label className="form__field">
        <div className="form__icon">
          <FiKey size="100%" />
        </div>
        <input
          type="password"
          className="form__input"
          placeholder="Password"
          value={password}
          onChange={onPasswordChangeHandler}
        />
      </label>
      <label className="form__field">
        <div className="form__icon">
          <FiKey size="100%" />
        </div>
        <input
          type="password"
          className="form__input"
          placeholder={registerStrings[locale].confirmPassword}
          value={confirmPassword}
          onChange={onConfirmChangeHandler}
        />
      </label>
      {isError && (
        <p className="form__alert">{registerStrings[locale].dontMatch}</p>
      )}
      <button type="submit" className="form__submit-button">
        {registerStrings[locale].register}
      </button>
    </form>
  );
};

export default RegisterInput;
