import { api, setAuthToken } from "./setauth"




export const createUser = async (body: {fullname: string, email: string, password: string}) => {
    try {
    const response = await api.post('/users/signup', body)
    return response.data
    } catch(error) {
    console.error('Could not create user', error)
    throw error
    }
}


export const loginUser = async (body: {email: string, password: string}) => {
    try {
        const response = await api.post('/users/login', body)
        localStorage.setItem('token', response.data.token)
        setAuthToken(response.data.token)
        return response.data
    } catch(error) {
        console.error('Could not login', error)
        throw error
    }
}

