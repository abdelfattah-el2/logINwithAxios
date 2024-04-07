import axios from "axios";

import { useState } from "react";

export default function Form() {
  const [firstName, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState();
  const [passNum, setpassnNum] = useState(false);
  const [user, setUser] = useState([]);
  function handelrSubmit(e) {
    e.preventDefault();

    axios
      .post("https://reqres.in/api/users/86", {
        fullName: firstName + lastName,
        password: password,
        date: date,
      })
      .then((res) => {
        setUser([res.data]);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setlastName("");
    setPassword("");
    setDate("");
    setpassnNum(false);
  }
  return (
    <>
      <form
        className=" text-xl  py-10 px-10     "
        onSubmit={(e) => handelrSubmit(e)}
      >
        <div className=" relative pb-10 grid  grid-cols-2 grid-row-2  gap-8 ">
          <div className=" flex flex-col  ">
            <label
              className="block  text-lg font-bold mb-2"
              htmlFor="firstName"
            >
              Your Fist Name
            </label>

            <input
              required
              value={firstName}
              className=" w-full placeholder:text-[#eeeeee] placeholder:font-bold px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#adcbe3] bg-[#faf9f96c] text-white   "
              id="firstName"
              type="text"
              placeholder="Your Fist Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col   ">
            <label className="block  text-lg font-bold mb-2" htmlFor="lastName">
              Your last Name
            </label>
            <input
              required
              value={lastName}
              placeholder="Your Fist Name"
              className=" w-full placeholder:text-[#eeeeee] placeholder:font-bold px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#adcbe3] bg-[#faf9f96c] text-white   "
              id="lastName"
              type="text"
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col relative  ">
            <label className="block  text-lg font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className=" w-full placeholder:text-[#eeeeee] placeholder:font-bold px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#adcbe3] bg-[#faf9f96c] text-white   "
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
            />
            {passNum && (
              <div className="  text-sm text-red-500   absolute -bottom-4  font-bold">
                Your password should be more than 5 characters
              </div>
            )}
          </div>
          <div className=" flex flex-col  ">
            <label className="block  text-lg font-bold mb-2" htmlFor="Date">
              Date
            </label>
            <input
              className=" w-full placeholder:text-[#eeeeee] placeholder:font-bold px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#adcbe3] bg-[#faf9f96c] text-white   "
              id="Date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            if (password.length < 5) {
              e.preventDefault();
              setpassnNum(true);
            }
          }}
          className=" font-bold shadow-md py-3 px-8 bg-[#162849] rounded-md"
        >
          Log In && sent
        </button>
        <div>
          {user.map((user) => {
            return (
              <div key={user.id}>
                <h1>
                  FullName:{user.fullName} Id:{user.id}
                </h1>
                <h2>date: {user.date}</h2>
                <h3> Your password : {user.password}</h3>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
}
