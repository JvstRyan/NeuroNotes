
import { api } from "./setauth"

export interface Quote {
    name: string
    person: string
    favourite: string
    note: string
    _id: string
}

//Get all filtered quotes

export const fetchQuotes = async (statement: string) => {
    try {
    const response = await api.get(`/quotes?favourite=${statement}`)
    return response.data.quote
    } catch(error) {
      console.error('Could not fetch quotes', error)
    }
  }


//Update quote

export const updateQuotes = async ({id, body}: {id: string, body: {name: string, person: string, favourite: boolean, note: string}}) => {
    try {
    const response = await api.patch(`/quotes/${id}`, body)
    return response.data.quote
    } catch(error) {
    console.error('Quote could not be updated', error)
    }
}


//Create quote

export const createQuote = async (body: {name: string, person: string, favourite: boolean, note: string}) => {
    try {
      const response = await api.post(`/quotes`, body)
      return response.data.quote
    } catch(error) {
        console.error('Could not create quote', error)
    }
}

//Delete quote
export const deleteQuote = async (_id: string) => {
    try {
        await api.delete(`/quotes/${_id}`)
      } catch(error) {
        console.error('Could not delete quote', error)
      }
}

