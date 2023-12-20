import { Button, FormControl, Input, Spacer } from "@chakra-ui/react"


const TaskForm = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

  return (
    <>
        <form onSubmit={handleSubmit} style={{marginTop: '2rem'}}>
            <FormControl>
                <Input 
                type="text"
                placeholder="Enter your task"
                w={'30rem'}
                ></Input>
                <Spacer h={'1rem'} />
                <Button colorScheme="blue" w={'30rem'}  type="submit">
                    Add to the list
                </Button>
            </FormControl>
        </form>
    </>
  )
}

export default TaskForm