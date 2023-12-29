import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import TaskForm from "./components/tasks/TaskForm";
import TaskItem from "./components/tasks/TaskItem";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import GoalForm from "./components/goals/GoalForm";
import GoalItem from "./components/goals/GoalItem";

interface TaskData {
  _id: string;
  name: string;
}

interface GoalData {
  _id: string;
  goal: string
}

const App = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [goals, setGoals] = useState<GoalData[]>([])

  useEffect(() => {
    const fetchTasks = async () =>  {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };

    fetchTasks();
  }, [tasks]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/goals")
        setGoals(response.data.goal)
      } catch(error) {
        console.error('failed to fetch goals', error)
      }
    }
    fetchGoals()
  }, [goals]);

  return (
    <>
    <NavBar />
    <SimpleGrid
      columns={{sm: 1, md:2}}
      placeContent={"center"}
      justifyItems={'center'}
      alignItems={'start'}
      spacing={20}
      
      mb={"2rem"}
    >
     <GridItem colSpan={1} placeSelf={{base: 'center', md: 'end'}} minH={'100%'}>
    <Flex direction="column" alignItems="center">
      <TaskForm />
      {tasks.map((item) => (
        <TaskItem key={item._id} task={item.name} _id={item._id} />
      ))}
    </Flex>
  </GridItem>
  <GridItem colSpan={1} placeSelf={{base: 'center', md: 'start'}}  minH={'100%'}>
    <Flex direction="column" justifyContent="flex-start" alignItems="center">
      <GoalForm />
      {goals.map((item) => (
        <GoalItem key={item._id} goal={item.goal} _id={item._id} />
      ))}
    </Flex>
  </GridItem>
      
    </SimpleGrid>
    </>
  );
};

export default App;
