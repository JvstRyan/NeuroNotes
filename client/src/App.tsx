import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import TaskForm from "./components/tasks/TaskForm";
import TaskItem from "./components/tasks/TaskItem";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import GoalForm from "./components/goals/GoalForm";
import GoalItem from "./components/goals/GoalItem";
import NotesModal from "./components/notes/NotesFolderModal";
import AddFolder from "./components/folders/AddFolder";
import { useFetchTasks } from "./api/task-requests";
import { useFetchGoals } from "./api/goal-requests";


interface FolderData {
  _id: string;
  name: string;
  description: string;
}

const App = () => {
  const [folders, setFolders] = useState<FolderData[]>([]);

  const {data: tasks} = useFetchTasks();
  const {data: goals} = useFetchGoals()

  

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/folders");
        setFolders(response.data.folders);
      } catch (error) {
        console.error("failed to fetch folders", error);
      }
    };
    fetchFolders();
  }, []);

  return (
    <>
      <NavBar />
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        placeContent={"center"}
        justifyItems={"center"}
        alignItems={"start"}
        spacing={20}
        mb={"2rem"}
      >
        <GridItem
          colSpan={1}
          placeSelf={{ base: "center", md: "end" }}
          minH={"100%"}
        >
          <Flex direction="column" alignItems="center">
            <TaskForm />
            {tasks?.map((item) => (
              <TaskItem key={item._id} task={item.name} _id={item._id} />
            ))}
          </Flex>
        </GridItem>
        <GridItem
          colSpan={1}
          placeSelf={{ base: "center", md: "start" }}
          minH={"100%"}
        >
          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <GoalForm />
            {goals?.map((item) => (
              <GoalItem key={item._id} goal={item.goal} _id={item._id} />
            ))}
          </Flex>
        </GridItem>
      </SimpleGrid>
      <Flex
        justify={"center"}
        align={"center"}
        gap={"1.5rem"}
        flexWrap={"wrap"}
        mb={"5rem"}
      >
        {folders.map((item) => (
          <NotesModal
            key={item._id}
            name={item.name}
            folderId={item._id}
            description={item.description}
          />
        ))}
        <AddFolder />
      </Flex>
    </>
  );
};

export default App;
