import React, { useContext, useState } from "react";
import { FiMail, FiKey } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import { loginStrings } from "../utils/strings";

const LoginInput = ({ login }) => {
  const { locale } = useContext(LocaleContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

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
      <button type="submit" className="form__submit-button">
        {loginStrings[locale].signIn}
      </button>
    </form>
  );
};

export default LoginInput;
