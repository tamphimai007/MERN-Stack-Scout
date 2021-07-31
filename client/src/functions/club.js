import axios from 'axios';



export const createClub = async (values, authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/club', values,
        {
            headers: {
                authtoken
            }
        })