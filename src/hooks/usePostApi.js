import { useEffect, useState } from "react";

export default function usePostApi(url, body) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postData = () => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          /* console.log("log de la data:", data); */
          setLoading(false);
          setData(data);
        })
        .catch((error) => {
          /*    console.log(error); */
          setLoading(false);
          setError(error);
        });
    };
    postData();
  }, [url]);

  return { data, loading, error };
}
