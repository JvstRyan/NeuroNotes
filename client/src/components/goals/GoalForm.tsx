import { Button, FormControl, Input, Spacer } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const GoalForm = () => {
  const [namedTask, setNamedTask] = useState("");


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            placeholder="Enter your yearly goals🏋️‍♂️"
            w={{base: '24rem', sm:  '28rem', md: '35rem'}}
            value={namedTask}
            onChange={(e) => setNamedTask(e.target.value)}
          ></Input>
          <Spacer h={"1rem"} />
          <Button _active={{transform: 'scale(0.98)', bg: 'white'}} _hover={{bg: 'white'}} variant={'outline'} border={'2px solid black'} w={{base: '24rem', sm:  '28rem', md: '35rem'}} h={"3rem"} type="submit">
          <FaPlus />
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default GoalForm;
