import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useFetchFolders } from "./api/folder-requests";
import { useFetchGoals } from "./api/goal-requests";
import { useFetchTasks } from "./api/task-requests";
import NavBar from "./components/NavBar";
import AddFolder from "./components/folders/AddFolder";
import GoalForm from "./components/goals/GoalForm";
import GoalItem from "./components/goals/GoalItem";
import NotesModal from "./components/notes/NotesFolderModal";
import TaskForm from "./components/tasks/TaskForm";
import TaskItem from "./components/tasks/TaskItem";
import QuoteForm from "./components/quotes/QuoteForm";
import BookForm from "./components/books/BookForm";
import BookItem from "./components/books/BookItem";
const App = () => {
  const { data: tasks } = useFetchTasks();
  const { data: goals } = useFetchGoals();
  const { data: folders } = useFetchFolders();


  

  return (
    <>
      <NavBar />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w={"100%"}
        h={"100%"}
      >
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
        <SimpleGrid
          columns={{ sm: 1, md: 3 }}
          alignItems={"center"}
          justifyItems={"center"}
          spacingX={6}
        >
          {folders?.map((item) => (
            <NotesModal
              key={item._id}
              name={item.name}
              folderId={item._id}
              description={item.description}
            />
          ))}
          <AddFolder />
        </SimpleGrid>
        <SimpleGrid
          placeContent={'center'}
          columns={[1]}
          minW={'75rem'}
        >
          <QuoteForm />
        </SimpleGrid>
        <SimpleGrid
          placeContent={'center'}
          columns={[1]}
          minW={'75rem'}
        >
          <BookForm />
        </SimpleGrid>
      </Flex>
      
    </>
  );
};

export default App;
