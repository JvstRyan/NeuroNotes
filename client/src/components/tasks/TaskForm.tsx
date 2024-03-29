import { Button, Flex, FormControl, Input, Spacer } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { postTask } from "../../api/task-requests";

const TaskForm = () => {
  const [namedTask, setNamedTask] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ name: namedTask });
    setNamedTask("");
  };

  return (
    <>
    <Flex justify={'center'} align={'center'}>
      <form onSubmit={createTask} style={{ marginTop: "2rem" }}>
        <FormControl>
          <Input
            type="text"
            h={"3rem"}
            variant={"flushed"}
            focusBorderColor={"black"}
            placeholder="Enter your daily tasks📃"
            w={{ base: '350px', md: '560px'}}
            value={namedTask}
            onChange={(e) => setNamedTask(e.target.value)}
            spellCheck={false}
          ></Input>
          <Spacer h={"1rem"} />
          <Button
            _active={{ transform: "scale(0.98)", bg: "white" }}
            _hover={{ bg: "white" }}
            variant={"outline"}
            border={"2px solid black"}
            w={{ base: '350px', md: '560px'}}
            h={"3rem"}
            type="submit"
          >
            <FaPlus />
          </Button>
        </FormControl>
      </form>
      </Flex>
    </>
  );
};

export default TaskForm;
