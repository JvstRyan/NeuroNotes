import { useQuery } from "@tanstack/react-query";
import { api } from "./setauth";


export interface TaskData {
    _id: string;
    name: string;
  }

//Get all tasks
const requestTasks = async () => {
    try {
     const response = await api.get("/tasks");
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
  try {
    const response = await api.post("http://localhost:5000/api/tasks", newTask);
    return response.data.tasks;
  } catch(error) {
    console.error('Failed to create task', error)
  }
  };


//Delete task
export const deleteTask = async (id: string) => {
  try {
    await api.delete(`/tasks/${id}`);
  } catch (error) {
    console.error("Failed to delete task", error);
    throw error;
  }
};


//Update task 
export const patchTask = async ({ id, body }: { id: string, body: {name: string} }) => {
  try {
   const response = await api.patch(`/tasks/${id}`, body )
   return response.data.tasks
  } catch(error) {
  console.error(error)
  }
}