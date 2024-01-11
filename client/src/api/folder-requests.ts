import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface FolderData {
    _id: string;
    name: string;
    description: string;
  }


    const fetchFolders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/folders");
        return response.data.folders
      } catch (error) {
        console.error("failed to fetch folders", error);
      }
    };


  export const useFetchFolders = () =>
    useQuery<FolderData[]>({
        queryKey: ['folders'],
        queryFn: fetchFolders
    })


// Create folder
 export const createFolder = async (body: {name: string, description: string}) => {
    try {
      await axios.post(`http://localhost:5000/api/folders/`, body)
    } catch(error) {
      console.error('Folder could not be created', error)
    }
  }

// Update folder
export const patchFolder = async ({id, body}: {id: string, body: {name: string, description: string}}) => {
    try {
        await axios.patch(`http://localhost:5000/api/folders/${id}`, body)
      }
     catch(error) {
      console.error("Updating folder went wrong", error);
    }
}

// Delete folder