
import { useQuery } from "@tanstack/react-query"
import { api } from "./setauth"

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
    ? `/books?reading=${statement}`
    : `/books`

    const response = await api.get(url)
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
    const response = await api.patch(`/books/${id}`, body)
    return response.data.books
    } catch(error) {
        console.error('Failed to update book', error)
    }
}


//Create Book
export const createBooks = async (body: {name: string, author: string, totalpages: string, currentpage: string, notes: string, reading: boolean}) => {
    try {
    await api.post(`/books/`, body)
    } catch(error) {
    console.error('Failed to create book', error)
    }
}


//Delete Book

export const deleteBooks = async (id: string) => {
    try {
    await api.delete(`/books/${id}`)
    } catch(error) {
    console.error('Failed to create book', error)
    }
}