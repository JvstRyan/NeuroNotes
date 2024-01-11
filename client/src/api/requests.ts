import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface TaskData {
    _id: string;
    name: string;
  }

//Get all tasks
const requestTasks = async () => {
    try {
     const response = await axios.get("http://localhost:5000/api/tasks");
     return response.data.tasks
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

export const useFetchTasks = () => 
   useQuery<TaskData[]>({
    queryKey: ['tasks'],
    queryFn: requestTasks
  })

//Create task
export const postTask = async (newTask: { name: string }) => {
    const response = await axios.post("http://localhost:5000/api/tasks", newTask);
    return response.data.tasks;
  };