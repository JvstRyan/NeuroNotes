import { Button, Flex, FormControl, Input, Spacer } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { postGoals } from "../../api/goal-requests";

const GoalForm = () => {
  const [namedGoal, setNamedGoal] = useState("");


  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: postGoals,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['goals']})
    }
  })

  const createGoal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutation.mutate({ goal: namedGoal })
    setNamedGoal('')
  }



  return (
    <>
    <Flex justify={'center'} align={'center'} mt={{sm: '-3.5rem', md:'2.1rem'}}>
      <form onSubmit={createGoal}>
        <FormControl>
          <Input
            type="text"
            h={"3rem"}
            variant={'flushed'}
            focusBorderColor={'black'}
            placeholder="Enter your yearly goals🏋️‍♂️"
            w={{base: '24rem', sm:  '28rem', md: '35rem'}}
            value={namedGoal}
            onChange={(e) => setNamedGoal(e.target.value)}
          ></Input>
          <Spacer h={"1rem"} />
          <Button _active={{transform: 'scale(0.98)', bg: 'white'}} _hover={{bg: 'white'}} variant={'outline'} border={'2px solid black'} w={{base: '24rem', sm:  '28rem', md: '35rem'}} h={"3rem"} type="submit">
          <FaPlus />
          </Button>
        </FormControl>
      </form>
      </Flex>
    </>
  );
};

export default GoalForm;
