import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface Quote {
    name: string
    person: string
    favourite: string
    note: string
    _id: string
}

export const fetchQuotes = async (statement: string) => {
    try {
    const response = await axios.get(`http://localhost:5000/api/quotes?favourite=${statement}`)
    return response.data.quote
    } catch(error) {
      console.error('Could not fetch quotes', error)
    }
  }
