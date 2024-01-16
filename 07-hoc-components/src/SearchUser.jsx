import HOC from "./HOC";

/* eslint-disable react/prop-types */
const UserList = ({ data }) => {
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

const SearchUser = HOC(UserList, "users");

export default SearchUser;
