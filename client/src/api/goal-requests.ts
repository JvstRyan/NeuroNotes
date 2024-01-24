import { useQuery } from "@tanstack/react-query";
import { api } from "./setauth";

interface GoalData {
    _id: string;
    goal: string;
  }

// Get all goals
const requestGoals = async () => {
      try {
        const response = await api.get("/goals");
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
    await api.post("/goals", newGoal  )
    } catch(error) {
    console.error('Create task failed', error)
    }
  }


//Update goal
export const patchGoal = async ({id, body}: {id: string, body: {goal: string}}) => {
    try {
    const response = await api.patch(`/goals/${id}`, body)
     return response.data.goal
    } catch(error) {
    console.error(error)
    }
}


//Delete goal
export const deleteGoal = async (_id: string) => {
        try {
        await api.delete(`/goals/${_id}`)
        } catch(error) {
            console.error(`${error}`)
        }
    }

