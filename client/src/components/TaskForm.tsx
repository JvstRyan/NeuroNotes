import { Button, FormControl, Input, Spacer, border } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const TaskForm = () => {
  const [namedTask, setNamedTask] = useState("");

  const createTask = async () => {
    try {
      await axios.post("http://localhost:5000/api/tasks", { name: namedTask });
      setNamedTask('')
    } catch (error) {
      console.error(`You cannot post this task ${error}`);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTask();
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        <FormControl>
          <Input
            type="text"
            h={"3rem"}
            variant={'flushed'}
            focusBorderColor={'black'}
            placeholder="Enter your daily task"
            w={"30rem"}
            value={namedTask}
            onChange={(e) => setNamedTask(e.target.value)}
          ></Input>
          <Spacer h={"1rem"} />
          <Button _active={{transform: 'scale(0.98)', bg: 'white'}} _hover={{bg: 'white'}} variant={'outline'} border={'2px solid black'} w={"30rem"} h={"3rem"} type="submit">
          <FaPlus />
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default TaskForm;
