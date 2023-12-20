import { Heading, SimpleGrid } from "@chakra-ui/react"
import TaskForm from "./components/TaskForm"
import TaskItem from "./components/TaskItem"
import axios from "axios"
import { useEffect, useState } from "react"

interface TaskData {
  _id: string
  name: string
}

const App = () => {

  const [tasks, setTasks] = useState<TaskData[]>([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks')
        setTasks(response.data.tasks)
        console.log(response.data.tasks)
      } catch(error) {
        console.error('Failed to fetch tasks', error)
      }
    }

    fetchTasks()
  }, [])


  return (
    <SimpleGrid justifyItems={'center'} placeContent={'center'} mt={'10rem'}>
    <Heading>
      Task Manager
    </Heading>
    <TaskForm />
    {
      tasks.map((item) => <TaskItem key={item._id} task={item.name} />)
    }
    </SimpleGrid>
    
  )
}

export default App