import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";
import { Children } from "./Children";

export const Parent = () => {
  const { value, increaseCount } = useContext(FamilyContext);
  return (
    <>
      <div className="singleBtnWrap">
        <h2>{value.showCount()}</h2>
        <button onClick={increaseCount}>Count By Parent</button>
      </div>
      <Children />
    </>
  );
};
