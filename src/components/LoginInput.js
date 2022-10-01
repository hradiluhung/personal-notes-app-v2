import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FiMail, FiKey } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import { loginStrings } from "../utils/strings";
import useInput from "../hooks/useInput";

const LoginInput = ({ login }) => {
  const { locale } = useContext(LocaleContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({ email, password });
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
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
      <button type="submit" className="form__submit-button">
        {loginStrings[locale].signIn}
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
