import axios from 'axios';



export const createTypeEvent = async (values, authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/typeevent', values,
        {
            headers: {
                authtoken
            }
        })

export const getTypeEvent = async (authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/typeevent',
        {
            headers: {
                authtoken
            }
        })

export const createSubTypeEvent = async (values, authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/subevent', values,
        {
            headers: {
                authtoken
            }
        })

export const getSubTypeEvent = async (authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/subevent',
        {
            headers: {
                authtoken
            }
        })

export const listSubTypeEvent = async (authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/getsubevent',
        {
            headers: {
                authtoken
            }
        })

export const createLevelEvent = async (values, authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/levelevent', values,
        {
            headers: {
                authtoken
            }
        })

