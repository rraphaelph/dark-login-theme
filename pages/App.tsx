import { useState } from "react";
import styles from "./App.module.css";
import GlobalStyle from "./GlobaStyle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleThemeChange = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email: ", email, " Password: ", password);
  };

  return (
    <div className={`${isDarkMode ? styles.dark : styles.light}`}>
      <GlobalStyle />
      <button className={styles.themeToggle} onClick={handleThemeChange}>
        {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
      <h1 className={styles.loginHeading}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            className={styles.loginInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className={styles.loginInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={styles.loginButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
