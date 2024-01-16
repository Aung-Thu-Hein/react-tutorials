import { useState } from "react";
import "./App.css";
import { Family } from "./context/Family";
import { FamilyContext } from "./context/FamilyContext";

const initialState = {
  count: 0,
  showCount: function () {
    return `count is: ${this.count}`;
  },
};

function App() {
  const [value, setValue] = useState(initialState);

  const increaseCount = () => {
    setValue((prevVal) => ({ ...prevVal, count: prevVal.count + 1 }));
  };

  return (
    <FamilyContext.Provider value={{ value, increaseCount }}>
      <h1>{value.showCount()}</h1>
      <div className="btnWrap">
        <Family />
      </div>
    </FamilyContext.Provider>
  );
}

export default App;
