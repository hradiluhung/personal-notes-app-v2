import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import { loginStrings } from "../utils/strings";

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className="login-page">
      <h1 className="login-page__title">{loginStrings[locale].greeting}</h1>
      <p className="login-page__text">{loginStrings[locale].text}</p>
      <LoginInput login={onLogin} />
      <p className="login-page__no-account-text">
        {loginStrings[locale].dontHave}{" "}
        <Link to="/register">{loginStrings[locale].register}</Link>
      </p>
    </section>
  );
};

export default LoginPage;
