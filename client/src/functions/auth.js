import axios from 'axios';


export const registerHandler = async (values) =>
    await axios.post(process.env.REACT_APP_API + '/register', values)

export const loginHandler = async (values) =>
    await axios.post(process.env.REACT_APP_API + '/login', values)


export const currentUser = async (authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/current-user', {},
        {
            headers: {
                authtoken
            }
        })

export const currentAdmin = async (authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/current-admin', {},
        {
            headers: {
                authtoken
            }
        })