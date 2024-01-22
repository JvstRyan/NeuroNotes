import axios from "axios"


export const createUser = async (body: {fullname: string, email: string, password: string}) => {
    try {
    const response = await axios.post('http://localhost:5000/api/users/signup', body)
    return response.data
    } catch(error) {
    console.error('Could not create user', error)
    throw error
    }
}


export const loginUser = async (body: {email: string, password: string}) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users/login', body)

        localStorage.setItem('token', response.data.token)

        return response.data
    } catch(error) {
        console.error('Could not login', error)
        throw error
    }
}

