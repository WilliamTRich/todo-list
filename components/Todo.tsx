//Utilities
import axios from "axios";
import { useCallback, useState } from "react";

//Components
import TodoInput from "@/components/TodoInput";

const Todo = () => {
  //Use State for form input
  const [todo, setTodo] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="flex flex-col m-6 p-3 border-2 border-black h-1/3 w-1/3">
      <TodoInput
        id="title"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
        label="Title"
      />
    </div>
  );
};

export default Todo;
