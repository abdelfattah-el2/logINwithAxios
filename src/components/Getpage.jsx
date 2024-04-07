import axios from "axios";
import { useEffect, useState } from "react";

export default function Getpage() {
  const [data, setDate] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/")
      .then((res) => setDate(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 className="text-xl">Get User</h1>
      {data.map((user) => {
        return(<div className="  p-2" key={user.id}>
          <h1 className=" text-lg"> Name :{user.first_name + user.last_name} </h1>
          <h2>Email : {user.email}</h2>
        </div>)
      })}
    </div>
  );
}
