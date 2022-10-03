import { useState } from "react";

export default function useFetch() {
  var [data, setData] = useState([]);
  function extractDataFromApi(url, payload, method) {
    fetch(
      url,
      {method: method}
    )
      .then((result) => result.json())
      .then((item) => setData(item));
  }
  return {data, extractDataFromApi}
}
