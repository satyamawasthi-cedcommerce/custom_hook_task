import React from "react";
import useFetch from "./Fetch";

function Fetchdata() {
  const { data, extractDataFromApi } = useFetch();

  const fetchFun = () => {
    var url = `https://jsonplaceholder.typicode.com/albums`;
    var payload = {};
    var method = "GET";

    extractDataFromApi(url, payload, method);
  };
  console.log(data);
  return (
    <div>
      <button onClick={fetchFun}>Click me</button>
      <table>
        <tr>
          <th>user_id</th>
          <th>Id</th>
          <th>Title</th>
        </tr>
        {data.map((item) => (
          <>
            <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>

            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default Fetchdata;
