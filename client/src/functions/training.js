import axios from 'axios'


export const createTraining = async (values, authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/training', values,
        {
            headers: {
                authtoken
            }
        })

export const getSubTypeEvent = async (id, authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/getSubTypeEvent/' + id,
        {
            headers: {
                authtoken
            }
        })

export const getLevel = async (id, authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/getLevel/' + id,
        {
            headers: {
                authtoken
            }
        })