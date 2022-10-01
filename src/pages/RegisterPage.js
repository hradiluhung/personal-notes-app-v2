import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import LocaleContext from "../contexts/LocaleContext";
import { register } from "../utils/network-data";
import { registerStrings } from "../utils/strings";

const RegisterPage = () => {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);

    if (!error) {
      navigate("/");
    }
  };

  return (
    <section className="signup-page">
      <p className="signup-page__text">Notes</p>
      <h1 className="signup-page__title">{registerStrings[locale].title}</h1>
      <RegisterInput register={onRegisterHandler} />
      <p className="signup-page__no-account-text">
        {registerStrings[locale].alreadyHave}{" "}
        <Link to="/">{registerStrings[locale].signIn}</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
