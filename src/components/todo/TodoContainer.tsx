import React from "react";
import TodoCard from "./TodoCard";
import { Button } from "../ui/button";

export default function TodoContainer() {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <Button className="bg-primary-gradient font-semibold">Add Todo</Button>
        <button>Filter</button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold">
          <p>There is no task pending</p>
        </div> */}

        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
}
