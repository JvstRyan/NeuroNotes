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


//Create quote

export const createQuote = async (body: {name: string, person: string, favourite: boolean, note: string}) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/quotes`, body)
      return response.data.quote
    } catch(error) {
        console.error('Could not create quote', error)
    }
}

//Delete quote
export const deleteQuote = async (_id: string) => {
    try {
        await axios.delete(`http://localhost:5000/api/quotes/${_id}`)
      } catch(error) {
        console.error('Could not delete quote', error)
      }
}

