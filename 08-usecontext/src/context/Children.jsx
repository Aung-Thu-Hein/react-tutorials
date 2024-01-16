import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";
import { GrandSon } from "./GrandSon";

export const Children = () => {
  const { value, increaseCount } = useContext(FamilyContext);
  return (
    <>
      <div className="singleBtnWrap">
        <h2>{value.showCount()}</h2>
        <button onClick={increaseCount}>Count By Children</button>
      </div>
      <GrandSon />
    </>
  );
};
