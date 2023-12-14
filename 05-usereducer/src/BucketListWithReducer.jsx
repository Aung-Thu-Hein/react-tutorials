import { useReducer } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { blReducer, formReducer } from "./BucketListReducer";
const Header = () => {
  return (
    <header>
      <h1>My Bucket List</h1>
      <h2>(Using React useReducer hook)</h2>
    </header>
  );
};

export const BucketListWithReducer = () => {
  const [state, dispatch] = useReducer(blReducer, []);
  const [wish, dispatchFormAction] = useReducer(formReducer, {
    title: "",
    by: "",
  });

  const handleWish = (e) => {
    e.preventDefault();
    dispatchFormAction({
      type: "INPUT_TEXT",
      payload: e.target.value,
      field: e.target.name,
    });
  };

  return (
    <>
      <Header />
      <ul>
        {state &&
          state.length > 0 &&
          state.map((item) => (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.isDone ? "line-through" : "" }}
              >
                <strong>{item.title} </strong>is due by {item.by}
              </span>
              <span>
                <TiTick
                  size={24}
                  onClick={() =>
                    dispatch({ type: "DONE_WISH", payload: item.id })
                  }
                />
              </span>
              <span>
                <MdDeleteForever
                  size={24}
                  onClick={() =>
                    dispatch({ type: "REMOVE_WISH", payload: item.id })
                  }
                />
              </span>
            </li>
          ))}
      </ul>
      <div>
        I want to to <input type="text" name="title" onChange={handleWish} /> by{" "}
        <input type="date" name="by" onChange={handleWish} />
        <button
          className="wishBtn"
          onClick={() => dispatch({ type: "ADD_WISH", payload: wish })}
        >
          Make a wish
        </button>
      </div>
    </>
  );
};
