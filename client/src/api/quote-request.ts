import axios from "axios"

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
    const response = await axios.get(`http://localhost:5000/api/quotes?favourite=${statement}`)
    return response.data.quote
    } catch(error) {
      console.error('Could not fetch quotes', error)
    }
  }


//Update quote

export const updateQuotes = async ({id, body}: {id: string, body: {name: string, person: string, favourite: boolean, note: string}}) => {
    try {
    const response = await axios.patch(`http://localhost:5000/api/quotes/${id}`, body)
    return response.data.quote
    } catch(error) {
    console.error('Quote could not be updated', error)
    }
}