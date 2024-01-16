import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";
import { Parent } from "./Parent";

export const Family = () => {
  const { value, increaseCount } = useContext(FamilyContext);
  return (
    <>
      <div className="singleBtnWrap">
        <h2>{value.showCount()}</h2>
        <button onClick={increaseCount}>Count By Family</button>
      </div>
      <Parent />
    </>
  );
};
