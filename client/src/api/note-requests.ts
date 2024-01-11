
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

 
    
    


  export const useFetchNotes = () =>
    useQuery<Notes[]>({
     queryKey: ['notes'],
     queryFn: fetchNotes
    })


