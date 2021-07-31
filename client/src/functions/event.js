import axios from 'axios';



export const createEvent = async (values, authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/event', values,
        {
            headers: {
                authtoken
            }
        })
export const listEvent = async (authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/event',
        {
            headers: {
                authtoken
            }
        })
// Express API
// 1.Training  /training
// 2.Club      /club
// 3.Camp      /camp
/* GET API */
export const getTraining = async (authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/training',
        {
            headers: {
                authtoken
            }
        })
export const getClub = async (authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/club',
        {
            headers: {
                authtoken
            }
        })
export const getCamp = async (authtoken) =>
    await axios.get(process.env.REACT_APP_API + '/camp',
        {
            headers: {
                authtoken
            }
        })
