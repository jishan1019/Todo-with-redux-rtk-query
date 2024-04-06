import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "@/redux/hook";

export default function TodoContainer() {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold">
          <p>There is no task pending</p>
        </div> */}

        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.map((item, index) => (
            <TodoCard
              key={index}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
