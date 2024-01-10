import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface TaskData {
    _id: string;
    name: string;
  }

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