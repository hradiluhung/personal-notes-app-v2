import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FiUser, FiKey, FiMail } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import { registerStrings } from "../utils/strings";
import useInput from "../hooks/useInput";

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmChange] = useInput("");
  const [isError, setIsError] = useState(false);
  const { locale } = useContext(LocaleContext);

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
          onChange={onNameChange}
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
          onChange={onEmailChange}
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
          onChange={onPasswordChange}
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
          onChange={onConfirmChange}
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

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
