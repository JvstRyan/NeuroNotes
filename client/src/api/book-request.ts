
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface Books {
    _id: string
    name: string
    author: string
    totalpages: string
    currentpage: string
    notes: string
    reading: boolean
}

const fetchAllBooks = async () => {
    try {
    const response = await axios.get('http://localhost:5000/api/books')
    return response.data.books
    } catch(error) {
    console.error('Failed to fetch books', error)
    }
}

 export const useFetchBooks = () => 
useQuery<Books[]>({
    queryFn: fetchAllBooks,
    queryKey: ['books']
})