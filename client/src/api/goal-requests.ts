import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface GoalData {
    _id: string;
    goal: string;
  }

// Get all goals
const requestGoals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/goals");
        return response.data.goal
      } catch (error) {
        console.error("failed to fetch goals", error);
      }
};

export const useFetchGoals = () => 
    useQuery<GoalData[]>({
        queryKey: ['goals'],
        queryFn: requestGoals
    })

//Create goal
export const postGoals = async (newGoal: {goal: string}) => {
    try {
    await axios.post("http://localhost:5000/api/goals", newGoal  )
    } catch(error) {
    console.error('Create task failed', error)
    }
  }

//Update goal
export const patchGoal = async ({id, body}: {id: string, body: {goal: string}}) => {
    try {
    const response = await axios.patch(`http://localhost:5000/api/goals/${id}`, body)
     return response.data.goal
    } catch(error) {
    console.error(error)
    }
}



//Delete goal

