import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import DetailNotePage from "./pages/DetailNotePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setInitializing(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={{ locale, toggleLocale }}>
        <ThemeProvider value={{ theme, toggleTheme }}>
          <div className="notes-app">
            <Navbar authedUser={authedUser} />
            <main className="note-app__main">
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={{ locale, toggleLocale }}>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <div className="notes-app">
          <Navbar authedUser={authedUser} logout={onLogout} />
          <main className="note-app__main">
            <Routes>
              <Route path="/" element={<HomePage user={authedUser} />} />
              <Route path="/add-note" element={<AddNotePage />} />
              <Route path="/archived-notes" element={<ArchivedNotesPage />} />
              <Route path="/note/:id" element={<DetailNotePage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
};

export default App;
