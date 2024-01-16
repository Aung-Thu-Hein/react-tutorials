import HOC from "./HOC";

/* eslint-disable react/prop-types */
const TodoList = ({ data }) => {
  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          <p>
            <strong>{todo.title}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

const SearchTodo = HOC(TodoList, "todos");

export default SearchTodo;
