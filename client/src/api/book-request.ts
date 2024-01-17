
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

export const fetchAllBooks = async (statement: boolean | undefined) => {
    try {
    const url = statement !== undefined 
    ? `http://localhost:5000/api/books?reading=${statement}`
    : `http://localhost:5000/api/books`

    const response = await axios.get(url)
    return response.data.books
    } catch(error) {
    console.error('Failed to fetch books', error)
    }
}

export const useFetchBooks = (statement: boolean | undefined) => useQuery<Books[]>({
    queryKey: ['books', statement],
    queryFn: () => fetchAllBooks(statement),
  })


  //Update Books
export const updateBooks = async ({id, body}: {id: string, body: {name: string, author: string, totalpages: string, currentpage: string, notes: string, reading: boolean}}) => {
    try {
    const response = await axios.patch(`http://localhost:5000/api/books/${id}`, body)
    return response.data.books
    } catch(error) {
        console.error('Failed to update book', error)
    }
}
