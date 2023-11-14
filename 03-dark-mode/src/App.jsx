import { useEffect, useState } from "react";
import { Article } from "./Article";
import data from "./data.js";

function App() {
  const getTheme = () => {
    let theme = "light-theme";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };

  const [theme, setTheme] = useState(getTheme());
  const [checked, setChecked] = useState(
    theme === "light-theme" ? false : true
  );

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(true);
    }
    if (theme === "dark-theme") {
      setTheme("light-theme");
      setChecked(false);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <div>
            <label htmlFor="darkMode" className="darkmode-label">
              Dark Mode
            </label>
            <label className="switch">
              <input
                type="checkbox"
                name="darkMode"
                checked={checked}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
