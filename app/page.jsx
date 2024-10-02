"use client";
import React, { useEffect, useState } from "react";
const page = () => {
  const [userinput, setuserinput] = useState("");
  const submit_handler = (e) => {
    e.preventDefault();
    if (userinput !== "") {
      console.log(userinput);
    }
    else {
      alert('enter something you user!');
    }
    setuserinput("");
  };
  const handlechange = (e) => {
    setuserinput(e.target.value);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-start gap-y-[20px] m-5">
      <div className="flex justify-center">
        <form onSubmit={submit_handler}>
          <div className="flex justify-center gap-x-4 items-center">
            <input
              className="border-black border-2 w-[392px] p-4 h-full rounded-md"
              placeholder="Enter the prompt! Go Wild!"
              value={userinput}
              onChange={handlechange}
            ></input>
            <button className="p-4 w-fit h-full bg-yellow-400 font-bold transition-all duration-500 hover:bg-yellow-300  hover:font-bold hover:text-blue-950 hover:text-xl hover:rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
