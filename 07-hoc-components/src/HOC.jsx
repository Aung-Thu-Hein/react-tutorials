import { useEffect, useState } from "react";

const HOC = (WrappedComponent, entity) => {
  return function NewComponent() {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    const filteredData = data.slice(0, 10).filter((value) => {
      if (entity === "users") {
        const { name } = value;
        return name.indexOf(term) >= 0;
      }
      if (entity === "todos") {
        const { title } = value;
        return title.indexOf(term) >= 0;
      }
    });

    useEffect(() => {
      async function fetchedData() {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        setData(json);
      }
      fetchedData();
    }, []);

    return (
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        {data && <WrappedComponent data={filteredData} />}
      </div>
    );
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default HOC;
