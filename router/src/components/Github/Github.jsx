import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/kanakk365")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/kanakk365");
  return responce.json();
};
