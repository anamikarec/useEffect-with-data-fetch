import axios from "axios";
import { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      // console.log(res.data);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <div>
      {data.map((todo) => {
        return (
          <>
            <p>
              {todo.id}-{todo.title} {todo.completed ? "Done" : "Pending"}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Fetch;
