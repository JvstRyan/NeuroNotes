
import axios from "axios";

 
    
// Get all Notes
export const fetchNotes = async (id: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/notes?folderId=${id}`
      );
      return response.data.note;
    } catch (error) {
      console.error(error);
    }
  };

// Create notes

// Update notes
 export const patchNotes = async ({id, body}: {id: string, body: {title: string, description: string, content: string}}) => {
    try {
     await axios.patch(`http://localhost:5000/api/notes/${id}`, body)
    } catch(error) {
      console.error('Note was not succesfully updated', error)
    }
  }
// Delete notes
export const deleteNotes = async (id: string) => {
    try {
        await axios.delete(`http://localhost:5000/api/notes/${id}`)
    } catch(error) {
        console.error('Removing of note has failed', error)
    }
}