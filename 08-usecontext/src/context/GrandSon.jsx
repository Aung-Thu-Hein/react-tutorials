import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";

export const GrandSon = () => {
  const { value, increaseCount } = useContext(FamilyContext);
  return (
    <div className="singleBtnWrap">
      <h2>{value.showCount()}</h2>
      <button onClick={increaseCount}>Count By Grandson</button>
    </div>
  );
};
