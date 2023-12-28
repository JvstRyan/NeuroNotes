import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

interface TaskData {
  _id: string;
  name: string;
}

const App = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  useEffect(() => {
    const fetchTasks = async () =>  {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        setTasks(response.data.tasks);
        console.log(response.data.tasks);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };

    fetchTasks();
  }, [tasks]);

  return (
    <>
    <NavBar />
    <SimpleGrid
      columns={{sm: 1, md:2}}
      justifyItems={"center"}
      placeContent={"center"}
      mb={"2rem"}
    >
      <GridItem colSpan={1}>
      <TaskForm />
      {tasks.map((item) => (
        <TaskItem key={item._id} task={item.name} _id={item._id} />
      ))}
      </GridItem>
      
    </SimpleGrid>
    </>
  );
};

export default App;
