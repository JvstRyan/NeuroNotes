import { useQuery } from "@tanstack/react-query";
import { api } from "./setauth";

interface FolderData {
    _id: string;
    name: string;
    description: string;
  }


    const fetchFolders = async () => {
      try {
        const response = await api.get("/folders");
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
      await api.post(`/folders/`, body)
    } catch(error) {
      console.error('Folder could not be created', error)
    }
  }

// Update folder
export const patchFolder = async ({id, body}: {id: string, body: {name: string, description: string}}) => {
    try {
        await api.patch(`/folders/${id}`, body)
      }
     catch(error) {
      console.error("Updating folder went wrong", error);
    }
}

// Delete folder
export const deleteFolder = async (id: string) => {
      try {
        await api.delete(`/folders/${id}`);
      } catch(error) {
          console.error('Folder could not be deleted', error)
      }
};
